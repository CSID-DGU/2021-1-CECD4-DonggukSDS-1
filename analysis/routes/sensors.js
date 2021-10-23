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


/* GET home page. */
router.post('/fetch', function (req, res, next) {
	debug.log(req.body);
	var inSensor = req.body.sensor_type;
	var inRoom = req.body.sensor_id;
	var inDate = req.body.target_room;
	var inDate = req.body.range;

	if inSensor
	var returnVal = {
		sensorName : "스마트 온도/습도센서",
		sensorId : "000100010000000014",
		timestep : "2021-10-06 15:13:42",
		data : [{"temperature":"23.9","humidity":"73.2","battery":"0"}]
	}
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