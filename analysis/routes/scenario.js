var express = require('express');
var router = express.Router();
var db_utils = require('./db_utils');
var debug = require('./debugTool');
var scenario_global = require('./scenario_variables')
global scenario_schedulers = stack()

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
	var period = req.body.period
	var comments = req.body.comments
	var conditions = req.body.conditions
	var actions = req.body.actions

	db_utils.insert_scenario(room_number, function(err, room_info){
		if(err)
		{
			console.log('err')
			res.send(400,-1)
		}

		var return_val = {
			return: room_info
		}
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

router.post('/analyze', function(req,res,next){
	console.log(req.body);
	var scenario_id = req.body.scenario_id
	results = is_scenario_on_fire()
	if (results)
	{
		res.send(results)
	}
	else
	{
		res.send("True")
	}
}
module.exports = router;