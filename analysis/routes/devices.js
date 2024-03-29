var express = require('express');
var router = express.Router();
var db_utils = require('./db_utils');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'devices' });
});

router.post('/room', function(req,res,next){
	var room_id = req.body.room_id
	var room_number = req.body.room_number
	db_utils.identify_room_devices(room_id, room_number, function(err, devices){
		if(err)
		{
			console.log('err')
			res.send(400,-1)
		}

		var return_val = {
			return: devices
		}
		res.send(return_val)
	})
})

module.exports = router;