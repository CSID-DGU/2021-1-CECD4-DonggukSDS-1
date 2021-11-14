var express = require('express');
var router = express.Router();
var db_utils = require('./db_utils');
var db_utils2 = require('./db_promise')
var debug = require('./debugTool');
var scenario_global = require('./scenario_variables');
var elastic = require('./elastic_utils');

let scenario_schedulers = {};
global.scenario_schedulers = scenario_schedulers;

// period : s
addSchedule = function(id, period){
	scenario_schedulers[id] = {"time": 0, "period": period};
}

/*
restful api
/scenario/insert
 - params : scenario_content, is_condition
 - 유저가 정의한 시나리오를 저장한다.
 examples
 	body.room_number = 5147
 	return ex)
 	{
    "return": {
        "room_id": 11,
        "room_name": "신공학관 5147호",
        "room_number": 5147
    }
    찾는 방 정보가 존재하지 않으면 return 키에 -1 값을 리턴한다.
}
*/
router.post('/insert', function(req, res, next){
	console.log(req.body);
	var name = req.body.scenario_name
	var manager_id = req.body.manager_id
	var sequential_check = req.body.sequential_check
	var comments = req.body.comments
	var update_period = req.body.period
	var active = 1
	var conditions = JSON.parse(req.body.conditions)
	var actions = JSON.parse(req.body.actions)
	console.log(conditions[1])
	console.log(actions[1])
	db_utils2.insert_scenario(name, manager_id, sequential_check, comments, update_period, active, conditions, actions, function(err, result){
		if(err)
		{
			console.log(err)
			res.send(400,-1)
		}
		var return_val = {
			return: result
		}
		addSchedule(result, update_period)
		res.send(return_val)
	})
})

/*
condition ex) {
	type : what,
	sensor : [1],
	attribute : ["temperature","humidity"],
	condition : ["greater_than", "greater_than"],
	threshold : [60, 70]
}
*/
process_conditions = function(conditions){
	con_type = conditions.type
	global_condition = scenario_global.condition
	con_types = global_condition.type
	if (con_types.includes(con_type)) 
	{
		keys = global_condition[con_type].keys // [sensor, attribute, condition, threshold]
		for (key in keys){
			key_values = conditions[key] 
			key_domains = global_condition[key]
			for (key_value in key_values){
				
			}
		}
	}
}

process_actions = function(actions){
	act_type = actions.type
}


router.post('/analyze', async function(req,res,next){
	console.log(req.body);
	var scenario_id = req.body.scenario_id
	try
	{
		results = await analyze(scenario_id)
		console.log(results)
		var return_val = {
			return: results
		}
		res.send(return_val)		
	}
	catch(err)
	{
		console.log(err)
		res.send(err)
	}
})

// 1 when, 1 range, always room_id
analyze = async function(scenario_id){
	try{
		console.log('scenario_id : ', scenario_id)
		rules = await db_utils2.get_rules(scenario_id);
		console.log('rule_sce : ', rules, scenario_id)

		let when = {};
		let range = {};
		for(var i = 0; i < rules.length; i++){
			let temp = await JSON.parse(rules[i]["rule"]);
			if(temp["type"] == "when"){
				when = temp;
			}
			else if(temp["type"] == "range"){
				range = temp;
			}
		}

		var now = new Date();
		var search_time = new Date();
		search_time.setHours(now.getHours() - 24);

		let trigger = true;
		for(var i = 0; i < rules.length; i++){
			let temp = await JSON.parse(rules[i]["rule"]);
			if(temp["type"] == "what"){
				what = temp;
				sensor_type = what["sensor"];
				room_id = range["room_id"];
				room_number = scenario_global.room_id_number[room_id]
				console.log('room_id room_number', room_id, room_number, sensor_type)
				let sensor_ids = await db_utils2.select_sensor_by_type_room(room_number, sensor_type);
				let attribute = what["attribute"];
				let condition = what["condition"];
				let threshold = what["threshold"];
				for(var j = 0; j < sensor_ids.length; j++){
					sensor_id = sensor_ids[i].sensor_id;
					search_data = await elastic.get_date_sensingData(sensor_id, search_time, now);
					console.log(search_data)
					for(var k = search_data.length-1; k < search_data.length; k++){
						console.log('k', search_data[k]._source.sen_data)
						tar_sen = search_data[k]._source.sen_data
						sensing_data = JSON.parse(tar_sen.substring(1,tar_sen.length-1));
						console.log('attribute', sensing_data[0][attribute], attribute)
						if(condition == "greater"){
							if(!(sensing_data[0][attribute] > threshold[0])){
								trigger = false;
							}
						}
						else if(condition == "less"){
							if(!(sensing_data[0][attribute] < threshold[0])){
								trigger = false;
							}
						}
						else if(condition == "between"){
							if(!(threshold[0] < sensing_data[0][attribute] &&
								sensing_data[0][attribute] < threshold[1])) {
								trigger = false;
							}
						}
						else if(condition == "equal"){
							if(!(sensing_data[0][attribute] == threshold[0])){
								trigger = false;
							}
						}
					}
				}
			}
		}
	}
	catch(err){
		console.log(err);
		return err;
	}

	var now = new Date();
	db_utils.pool.getConnection((err, con) => {
		con.query("update DGUSDS.scenario set last_check = ? where scenario_id = ?", 
			[now, scenario_id], (err, ret) => {
			if(err){
				console.log(err);
				return err;
			}
		})
	})

	if(trigger){
		try{
			db_utils.pool.getConnection((err, con) => {
				con.query("update DGUSDS.scenario set fire = 1 where scenario_id = ?", 
					[scenario_id], (err, ret) => {
					con.release();
					if(err) {
						console.log(err);
						return err;
					}
					if(!ret){
						console.log("update false");
					}
				})
			})
		}
		catch(err){
			console.log(err);
			return err;
		}
		// control server로 room_id, scenario_id를 보낸다
	}
	return trigger
}
module.exports = {
	router:router,
	analyze:analyze
};
