var express = require('express');
var router = express.Router();
var db_utils = require('./db_utils');
var debug = require('./debugTool');


/*
restful api
/room/number
 - params : room_number
 - 신공학관의 room id와 정식 명칭을 알 수 있다.
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
router.post('/number', function(req, res, next){
	console.log(req.body);
	var room_number = req.body.room_number;
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

/*
restful api
/room/all
 - params : x
 - 신공학관의 room id와 정식 명칭을 알 수 있다.
 examples
 	return ex)
 	{
    "return": [
        {
            "room_id": 1,
            "room_name": "신공학관 2158호",
            "room_number": 2158
        },
        {
            "room_id": 2,
            "room_name": "신공학관 3101호",
            "room_number": 3101
        }, ...
    ]
	}
    찾는 방 정보가 존재하지 않으면 return 키에 -1 값을 리턴한다.
}
*/
router.post('/all', function(req,res,next){
	console.log(req.body);
	db_utils.get_all_room(function(err, room_info){
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

module.exports = router;
