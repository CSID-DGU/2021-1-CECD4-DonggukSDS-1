var express = require('express');
var router = express.Router();
var db_utils = require('./db_utils');
var debug = require('./debugTool');


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
	var contents = req.body.scenario_content;
	db_utils.identify_room_by_number(room_number, function(err, room_info){
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