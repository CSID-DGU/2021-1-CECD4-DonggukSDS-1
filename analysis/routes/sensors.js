var express = require('express');
var router = express.Router();
var db_utils = require('./db_utils');
var debug = require('./debugTool');

/*
	sensor 데이터 모음집.
	가지고 있는 센서 : 1
	http://210.94.199.139/deviceboard?sengrpcd=0001
	모든 센서 데이터 들어오는 데이터 양식
	

	1. 스마트 온도/습도센서
	센서관리번호	날짜	데이터
	000100010000000014	2021-10-06 15:13:42	[{"temperature":"23.9","humidity":"73.2","battery":"0"}]
	
	2. 스마트 에너지 미터
	000100010000000032	2021-10-06 15:18:24	[{"energy":"0.0","power":"0.0","current":"0.0","voltage":"215.282"}]

	3. 스마트 전등스위치
	000100010000000059	2021-10-06 15:21:12	[{"onoff":"1","on_time":"0"}]
	
	4. 스마트 콘센트
	000100010000000064	2021-10-06 15:15:21	[{"energy":"453.564","power":"0.097033","current":"0.66","voltage":"216.592","enable":"1","threshold":"1000"}]
	000100010000000064	2021-10-06 15:15:15	[{"onoff":"1","lock":"0"}]

	5. 스마트 IoT 레이더 센서
	000100010000000104	2021-10-06 15:21:52	[{"MsgID":1,"TargetID":0,"PositionX":234,"PositionY":46,"PositionZ":0,"BPM":0,"HBR":890,"Therm":0,"rsv":0,"Engergy":196,"Point":0,"Type":0,"status":1,"v1":0,"v2":0,"y1":0,"y2":0}]
	000100010000000104	2021-10-06 15:21:45	[{"MsgID":1,"TargetID":0,"PositionX":238,"PositionY":43,"PositionZ":0,"BPM":0,"HBR":890,"Therm":0,"rsv":0,"Engergy":10,"Point":0,"Type":0,"status":1,"v1":252,"v2":7,"y1":252,"y2":5}]

*/

/*
/sensor/room
 - params : room_id
 - 해당 강의실에 존재하는 센서들의 종류와 아이디를 리턴한다.
 examples
 	body.room_id = null
 	body.room_number = 5147
 	return ex)
 	{
    "return": [
        {
            "sensor_id": "000100010000000011",
            "sensor_type": 1,
            "sensor_name": "스마트 온도/습도센서",
            "room_id": 11,
            "room_name": "신공학관 5147호",
            "room_number": 5147
        },
        {
            "sensor_id": "000100010000000031",
            "sensor_type": 2,
            "sensor_name": "스마트 에너지 미터",
            "room_id": 11,
            "room_name": "신공학관 5147호",
            "room_number": 5147
        }]
    }
    찾는 센서 정보가 존재하지 않으면 return 키에 -1 값을 리턴한다.
*/
router.post('/room', function(req,res,next){
	console.log(req.body)
	var room_id = req.body.room_id
	var room_number = req.body.room_number
	db_utils.identify_room_sensors(room_id, room_number, function(err, sensors){
		if(err)
		{
			console.log('err')
			res.send(400,-1)
		}

		var return_val = {
			return: sensors
		}
		res.send(return_val)
	})
})

/*
restful api
/sensor/get/type
 - params : sensor_id, sensor_type
 - 해당 센서 아이디의 위치와 타입, 그리고 종류를 알 수 있다.
 - 센서 타입별로 센서의 위치와 아이디를 알 수 있다.
 - 모든 센서의 타입을 알 수 있다.
 examples 1)
 	body.sensor_id = 000100010000000001
 	return ex)
 	{
    "return": {
        "sensor_id": "000100010000000001",
        "sensor_type": 1,
        "sensor_name": "스마트 온도/습도센서",
        "room_id": 1,
        "room_name": "신공학관 2158호",
        "room_number": 2158
    }
 examples 2)
    sensor id를 요청할 때 입력하지 않으면 모든 센서 종류를 리턴한다.
    body.sensor_id = null
    return ex)
    {
	    "return": [
	        {
	            "sensor_type": 1,
	            "sensor_name": "스마트 온도/습도센서"
	        },
	        {
	            "sensor_type": 2,
	            "sensor_name": "스마트 에너지 미터"
	        },
	        {
	            "sensor_type": 3,
	            "sensor_name": "스마트 전등스위치"
	        },
	        {
	            "sensor_type": 4,
	            "sensor_name": "스마트 콘센트"
	        },
	        {
	            "sensor_type": 5,
	            "sensor_name": "스마트 IoT레이더 센서"
	        }
	    ]
	}
examples 3)
    sensor type만 입력한다면 해당 센서 타입을 가지고 있는 모든 센서 종류를 리턴한다.
    body.sensor_id = null
    body.sensor_type = 1
    return ex)
    {
    "return": [
        {
            "sensor_id": "000100010000000001",
            "sensor_type": 1,
            "sensor_name": "스마트 온도/습도센서",
            "room_id": 1,
            "room_name": "신공학관 2158호",
            "room_number": 2158
        },
        {
            "sensor_id": "000100010000000002",
            "sensor_type": 1,
            "sensor_name": "스마트 온도/습도센서",
            "room_id": 2,
            "room_name": "신공학관 3101호",
            "room_number": 3101
        },
        {
            "sensor_id": "000100010000000003",
            "sensor_type": 1,
            "sensor_name": "스마트 온도/습도센서",
            "room_id": 3,
            "room_name": "신공학관 3106호",
            "room_number": 3106
        },
        {
            "sensor_id": "000100010000000004",
            "sensor_type": 1,
            "sensor_name": "스마트 온도/습도센서",
            "room_id": 4,
            "room_name": "신공학관 3107호",
            "room_number": 3107
        }
        ]
    }
    찾는 센서 정보가 존재하지 않으면 return 키에 -1 값을 리턴한다.
*/
router.post('/get/type', function(req,res,next){
	console.log(req.body);
	var sensor_id = req.body.sensor_id
	var sensor_type = req.body.sensor_type
	if(sensor_id)
	{
		db_utils.identify_sensor_type_by_id(sensor_id, function(err, sensor_info){
			if(err)
			{
				console.log('err')
				res.send(400,-1)
			}

			var return_val = {
				return: sensor_info
			}
			res.send(return_val)
		})
	}
	else if(sensor_type)
	{
		db_utils.identify_sensor_type_by_type(sensor_type, function(err, sensor_info){
			if(err)
			{
				console.log('err')
				res.send(400,-1)
			}

			var return_val = {
				return: sensor_info
			}
			res.send(return_val)
		})
	}
	else
	{
		db_utils.get_all_sensor_type(function(err, sensor_info){
			if(err)
			{
				console.log('err')
				res.send(400,-1)
			}

			var return_val = {
				return: sensor_info
			}
			res.send(return_val)
		})
	}
})

router.post('/fetch/room', function(req,res,next){
	console.log(req.body)
	var room_id = req.body.room_id
	var sensor_type = req.body.sensor_type


})
/* GET home page. */
router.post('/fetch', function (req, res, next) {
	debug.log(req.body);
	var sensor_type = req.body.sensor_type; // 0 (all)
	var sensor_id = req.body.sensor_id; // array, 0 (all)
	var target_room = req.body.target_room; // array
	var range = req.body.range; // latest, topk, date specified

	
	db_utils.
	res.send(returnVal)
});


router.post('/analyze', function(req,res,next){
	debug.log(req.body)
	var inRoom = req.body.room;

	var evidnece = {
		sensorName : "스마트 전등스위치",
		sensorId : "000100010000000059",
		timestep : "2021-10-06 15:21:12",
		data : [{"onoff":"1","on_time":"0"}]
	}
	var returnVal = {
		result : {person : false, inDanger : false, secheduled : false, electricity : "fair", evidence : [evidnece]}
	}
	res.send(returnVal)
})

module.exports = router;