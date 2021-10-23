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

exports.get_specific_room_info = function(roomId, callback) {
  var roomId; 
  pool.getConnection(function (err, con) {
    // Use the connection
    con.query('SELECT roomId, roomName, videoId, videoTimestamp, bangjangId, nickname FROM room left join user on room.bangjangId = user.userId where room.roomId = ?', 
      [roomId],
      function (err, rows) {
        con.release(); // Don't use the connection here, it has been returned to the pool.
        if (err) {
          console.error("err : " + err);
          return callback(err);
        }
        else if(rows.length <=0)
        {
          return callback(null,0);
        }
        console.log("rows : " + JSON.stringify(rows));
        // console.log("room start>>>> " + rows);
        //console.log(rows);
        //rowObjs = JSON.stringify(rows);
        rowObj = rows[0];
        console.log(rowObj);
        //console.log("vId: " + rowObj.videoId)
        //console.log("vTs: " + rowObj.videoTimestamp)
        console.log("room end>>>> ");

        return callback(null, rowObj);
    });

  }); 
}

exports.get_room_info = function(callback)
{
  pool.getConnection(function(err,con){
    con.query('SELECT roomId, roomName, videoId, videoTimestamp, bangjangId, nickname FROM room left join user on room.bangjangId = user.userId',[],function(err,result){
      con.release();
      if(err){
        console.error('err : ' + err);
        return callback(err);
      }
      if(result.length <= 0)
      {
        return callback(null,0);
      }
      return callback(null, result);
    })
  })
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