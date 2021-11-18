var express = require('express');
var debug = require('./debugTool');
var mysql = require('mysql');
DB_PASSWORD = "dgu2021sds@)@!";

var pool = mysql.createPool({
  connectionLimit: 3,
  host: "1.245.223.69",
  user: "dgusds",
  password: DB_PASSWORD,
  port : 13062,
  database: "DGUSDS"
});
exports.pool = pool

/* room/number */
exports.identify_room_by_number = function(room_number, callback){
  pool.getConnection(function (err, con){
    query = 'SELECT room_id, room_number, room_number FROM room_info WHERE room_number = ?'
    con.query(query, [room_number],
      function (err, result){
        con.release()
        if (err){
          console.error("err : " + err);
          return callback(err);
        }

        if (result.length <= 0)
        {
          console.log('no_data');
          return callback(null, -1);
        }
        console.log('room_id : ' + JSON.stringify(result));
        room_infos = result[0];
        return callback(null, room_infos)
      }
    )
  })
}

/* room/all */
exports.get_all_room = function(callback){
  pool.getConnection(function (err, con){
    query = 'SELECT room_id, room_name, room_number FROM room_info'
    con.query(query, [],
      function (err, result){
        con.release()
        if (err){
          console.error("err : " + err);
          return callback(err);
        }

        if (result.length <= 0)
        {
          console.log('no_data');
          return callback(null, -1);
        }
        console.log('rooms : ' + JSON.stringify(result));
        room_infos = result;
        return callback(null, room_infos)
      }
    )
  })
}

/* sensor/get/type */
exports.identify_sensor_type_by_id = function(sensor_id, callback){
  pool.getConnection(function (err, con){
    query = 'SELECT a.sensor_id, a.sensor_type, b.sensor_name, c.room_id, d.room_name, d.room_number FROM sensor_info as a \
    inner join sensor_type as b on a.sensor_type = b.sensor_type \
    left join room_sensor as c on a.sensor_id = c.sensor_id \
    left join room_info as d on c.room_id = d.room_id \
    WHERE a.sensor_id = ?'
    con.query(query, [sensor_id],
      function (err, result){
        con.release()
        if (err){
          console.error("err : " + err);
          return callback(err);
        }

        if (result.length <= 0)
        {
          console.log('no_data');
          return callback(null, -1);
        }
        console.log('return : ' + JSON.stringify(result));
        sensor_type = result[0];
        return callback(null, sensor_type)
      }
    )
  })
}

/* sensor/get/type */
exports.identify_sensor_type_by_type = function(sensor_type, callback){
  pool.getConnection(function (err, con){
    query = 'SELECT a.sensor_id, a.sensor_type, b.sensor_name, c.room_id, d.room_name, d.room_number FROM sensor_info as a \
    inner join sensor_type as b on a.sensor_type = b.sensor_type \
    left join room_sensor as c on a.sensor_id = c.sensor_id \
    left join room_info as d on c.room_id = d.room_id \
    WHERE a.sensor_type = ?'
    con.query(query, [sensor_type],
      function (err, result){
        con.release()
        if (err){
          console.error("err : " + err);
          return callback(err);
        }

        if (result.length <= 0)
        {
          console.log('no_data');
          return callback(null, -1);
        }
        console.log('return : ' + JSON.stringify(result));
        sensor_type = result;
        return callback(null, sensor_type)
      }
    )
  })
}

/* sensor/get/type */
exports.get_all_sensor_type = function(callback){
  pool.getConnection(function (err, con){
    query = 'SELECT * FROM sensor_type'
    con.query(query, [],
      function (err, result){
        con.release()
        if (err){
          console.error("err : " + err);
          return callback(err);
        }

        if (result.length <= 0)
        {
          console.log('no_data');
          return callback(null, -1);
        }
        console.log('return : ' + JSON.stringify(result));
        sensor_type = result;
        return callback(null, sensor_type)
      }
    )
  })
}

/* /sensor/room */
exports.identify_room_sensors = function(room_id, room_number, callback){
  pool.getConnection(function (err, con){
    query = 'SELECT a.sensor_id, a.sensor_type, b.sensor_name, c.room_id, d.room_name, d.room_number FROM sensor_info as a \
    inner join sensor_type as b on a.sensor_type = b.sensor_type \
    left join room_sensor as c on a.sensor_id = c.sensor_id \
    left join room_info as d on c.room_id = d.room_id \
    WHERE d.room_id = ? or d.room_number = ?'
    con.query(query, [room_id, room_number],
      function (err, result){
        con.release()
        if (err){
          console.error("err : " + err);
          return callback(err);
        }

        if (result.length <= 0)
        {
          console.log('no_data');
          return callback(null, -1);
        }
        console.log('room_id : ' + JSON.stringify(result));
        sensors = result;
        return callback(null, sensors)
      }
    )
  })
}

/* /deivce/room */
exports.identify_room_devices = function(room_id, room_number, callback){
  pool.getConnection(function (err, con){
    query = 'SELECT a.device_id, a.device_type, b.device_name, c.room_id, d.room_name, d.room_number FROM device_info as a \
    inner join device_type as b on a.device_type = b.device_type \
    left join room_device as c on a.device_id = c.device_id \
    left join room_info as d on c.room_id = d.room_id \
    WHERE d.room_id = ? or d.room_number = ?'
    con.query(query, [room_id, room_number],
      function (err, result){
        con.release()
        if (err){
          console.error("err : " + err);
          return callback(err);
        }

        if (result.length <= 0)
        {
          console.log('no_data');
          return callback(null, -1);
        }
        console.log('room_id : ' + JSON.stringify(result));
        sensors = result;
        return callback(null, sensors)
      }
    )
  })
}

// /sensor/get/room/type
exports.select_sensor_by_type_room = function(room_number, sensor_type, callback){
  pool.getConnection(function (err, con){
    query = 'SELECT a.sensor_id, a.sensor_type, b.sensor_name, c.room_id, d.room_name, d.room_number FROM sensor_info as a \
    inner join sensor_type as b on a.sensor_type = b.sensor_type \
    left join room_sensor as c on a.sensor_id = c.sensor_id \
    left join room_info as d on c.room_id = d.room_id \
    WHERE d.room_number = ? and a.sensor_type = ?'
    con.query(query, [room_number, sensor_type],
      function (err, result){
        con.release()
        if (err){
          console.error("err : " + err);
          return callback(err);
        }

        if (result.length <= 0)
        {
          console.log('no_data');
          return callback(null, -1);
        }
        console.log('room_id : ' + JSON.stringify(result));
        sensors = result;
        return callback(null, sensors)
      }
    )
  })
}

exports.select_sensor_top_n = function(sensor_id, room_id, range, callback){
  pool.getConnection(function (err, con) {
    // Use the connection
    query = 'SELECT * FROM tb_data WHERE sen_mng_no in (?)'
    con.query(query, [sensor_id],
      function (err, result) {
        con.release(); // Don't use the connection here, it has been returned to the pool.
        if (err) {
          console.error("err : " + err);
          return callback(err);
        }
        
        if(result.length <= 0)
        {
          debug.log('already exists');
          return callback(null, -1);
        }
        console.log('room_id : ' + JSON.stringify(result));
        sensors = result;
        return callback(null, sensors)
    });
  }); 
}

exports.select_sensor = function(sensor_type, sensor_id, room_id, range,callback) {
  pool.getConnection(function (err, con) {
    // Use the connection
    query = 'SELECT data.id, data.sensor_id, room. FROM sensor_data as data, sensor_info as info, room_info as room, room_sensor WHERE '
    con.query('INSERT INTO user(nickname) VALUES (?)', [userName],
      function (err, result) {
        con.release(); // Don't use the connection here, it has been returned to the pool.
        if (err) {
          console.error("err : " + err);
          return callback(err);
        }
        
        if(result.length <= 0)
        {
          debug.log('already exists');
          return callback(null, -1);
        }
        userId = result.insertId;
        console.log("uuuu1 :" + userId);
        return callback(null,userId);
    });
  }); 
}

exports.insert_user = function(userName,callback) {
  var userId;

  pool.getConnection(function (err, con) {
    // Use the connection
    con.query('INSERT INTO user(nickname) VALUES (?)', [userName],
      function (err, result) {
        con.release(); // Don't use the connection here, it has been returned to the pool.
        if (err) {
          console.error("err : " + err);
          return callback(err);
        }
        
        if(result.length <= 0)
        {
          debug.log('already exists');
          return callback(null, -1);
        }
        userId = result.insertId;
        console.log("uuuu1 :" + userId);
        return callback(null,userId);
    });
  }); 
}


exports.create_room = function(roomName, videoId, bangjangId, callback) {
  var roomId; 
  var videoStarttimeSeconds = Math.floor(new Date().getTime() / 1000);
  pool.getConnection(function (err, con) {
    // Use the connection
    con.query('INSERT INTO room(roomName, videoId, videoTimestamp, bangjangId) VALUES (?, ?, ?, ?)', 
      [roomName, videoId, videoStarttimeSeconds, bangjangId],
      function (err, result) {
        con.release(); // Don't use the connection here, it has been returned to the pool.
        if (err) {
          console.error("err : " + err);
          return callback(err);
        }
        //console.log("rows : " + JSON.stringify(rows));

        //res.render('index', {title: 'test', rows: rows});
        roomId = result.insertId;
        return callback(null, roomId);
    });

  }); 
}

exports.set_time_rewind = function(timeSec, nickname, roomId, callback)
{
  pool.getConnection(function(err,con){
    con.query('SELECT roomId, roomName, videoId, videoTimestamp, bangjangId, nickname FROM room left join user on room.bangjangId = user.userId where user.nickname = ?',[nickname],function(err,result){
      if(err){
        console.error('err : ' + err);
        return callback(err);
      }
      var videoStarttimeSeconds = Math.floor((new Date().getTime() - Number(timeSec) * 1000) / 1000);
      con.query('UPDATE room SET videoTimestamp = ? WHERE roomId = ?', [videoStarttimeSeconds,roomId], function(err, result){
        con.release();
        if(err)
        {
          console.error('err : ' + err);
          return callback(err);
        }
        return callback(null, true);
      })
    })
  })
}

//"dgu2021sds@)@!"


exports.insert_scenario_content = function(scenario_id, contents, callback)
{
  cond_query = 'INSERT INTO condtion (rule)'
  act_query = 'INSERT INTO action (rule)'
}
