var express = require('express');
var router = express.Router();

const db = require('../modules/db');
const sql = require('../sql');

router.post('/room', async function(req,res,next){
	console.log(req.body)
	var room_id = req.body.room_id
	var room_number = req.body.room_number

    var [rows] = await db.query(sql.iot.selectSensorRoom, [room_id, room_number]);
    if(rows.length != 0)
    {
		var return_val = {
			return: rows
		}
		res.send(return_val);
    } else {
        res.send(400, -1);
    }
})

module.exports = router;