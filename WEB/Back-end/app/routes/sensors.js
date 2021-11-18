var express = require('express');
var router = express.Router();
const db = require('../modules/db');
const sql = require('../sql');
//import callAPI from '../_utils/apiCaller';
const axios = require('axios')

router.post('/emergency', async function(req, res, next){
	var [rows] = await db.query(sql.iot.selectSensorRoom, [11, 5147]);

	var result = [];
	await Promise.all(rows.map(async sensor => {
		var [row] = await db.query(sql.iot.countSensorByToday, sensor.sensor_id);	
		row = row[0];
		if(row[Object.keys(row)[0]] == 0){
			result.push({
				sensor_name: sensor.sensor_name,
				sonsor_id: sensor.sensor_id,
				room_name: sensor.room_name
			})
		}
	}));

	res.send({
		sensor: result
	})
});

router.post('/room', async function(req,res,next){
	var room_id = req.body.room_id
	var room_number = req.body.room_number

    var [rows] = await db.query(sql.iot.selectSensorRoom, [room_id, room_number]);
	await Promise.all(rows.map(async sensor => {
		var [row] = await db.query(sql.iot.countSensorByToday, sensor.sensor_id);	
		row = row[0];
		if(row[Object.keys(row)[0]] == 0){
			sensor.status = "오류";
		}
		else{
			sensor.status = "정상";
		}
	}));
    if(rows.length != 0)
    {
		var return_val = {
			return: rows
		}
		res.send(return_val);
    } else {
        res.send(400, -1);
    }
});

router.post('/weekenergy', async function(req,res,next){
	var result = [];

	for(let i = 6; i >= 0; i--) {
		var [rows] = await db.query(sql.iot.selectSensorDataByDate, ['000100010000000032', i]);
	
		if(rows.length != 0){
			var energy = 0.0;
			await rows.map(data => energy += parseFloat(JSON.parse(data.sen_data.slice(2, -2)).power));
			result.push(energy);
		} else {
			result.push(0.0);
		}
	}

	/*for(let i = 6; i >= 0; i--) {
let today = new Date();
let zero = new Date();
zero.setMonth(zero.getMonth() - 1);
zero.setHours(zero.getHours() - zero.getHours());
zero.setMinutes(zero.getMinutes() - zero.getMinutes());
zero.setSeconds(zero.getSeconds() - zero.getSeconds());
axios({
  method: 'POST',
  headers: null,
  url: 'http://1.238.89.68:3000/sensor/get/date',
  data: {
    sensorId: '000100010000000032',
    //startDate: '2021-10-01T00:00:00',
    //endDate: '2021-11-18T00:00:00'
    startDate: zero,
    endDate: today
  	}
	}).then(res => {
  	console.log("test");
  	console.log(res.data);
  	console.log("test2");
	})
}*/

	res.send({
		return: result
	})
});

router.post('/weekplug', async function(req, res, next){
	var result = [];

	for(let i = 6; i >= 0; i--) {
		var [rows] = await db.query(sql.iot.selectSensorDataByDate, ['000100010000000068', i]);
	
		if(rows.length != 0){
			var energy = 0.0;
			await rows.map(data => energy += (JSON.parse(data.sen_data.slice(2, -2)).power ? parseFloat(JSON.parse(data.sen_data.slice(2, -2)).power) : 0.0));
			result.push(energy);
		} else {
			result.push(0.0);
		}
	}

	res.send({
		return: result
	})
});

router.post('/weekall', async function(req, res, next) {
	var result = [];

	for(let i = 0; i >= 0; i--) {
		var [rows] = await db.query(sql.iot.selectAllSensorDataByDate, [i]);
	
		if(rows.length != 0){
			var energy = 0.0;
			await rows.map(data => energy += (JSON.parse(data.sen_data.slice(2, -2)).power ? parseFloat(JSON.parse(data.sen_data.slice(2, -2)).power) : 0.0));
			result.push(energy);
		} else {
			result.push(0.0);
		}
	}

	res.send({
		return: result
	})
})

router.post('/temp', async function(req, res, next) {

	var [rows] = await db.query(sql.iot.selectTemperature, ['000100010000000011']);
	temp = parseFloat(JSON.parse(rows[0].sen_data.slice(2, -2)).temperature);

	res.send({
		temp: temp
	})
})

module.exports = router;