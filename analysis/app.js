var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var rooms = require('./routes/rooms');
var sensors = require('./routes/sensors');
var devices = require('./routes/devices');
var db = require('./routes/db');
var scenario = require('./routes/scenario')

var cors = require('cors');
var app = express();

app.set('port', 3002);// 52270
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/sensor', sensors);
app.use('/room', rooms);
app.use('/device', devices);
app.use('/db', db);
app.use('/scenario', scenario.router)

var server = http.createServer(app);
var runServer = server.listen(app.get('port'),function(){
  console.log('Server:'+ app.get('port') +  ' is running');
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler	
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// start schedulers
var db_utils = require('./routes/db_utils');

db_utils.pool.getConnection((err, con) => {
  con.query('select scenario_id, period, last_check from DGUSDS.scenario;', (err, rows) => {
    con.release();

    console.log(JSON.stringify(rows));
    try{
      if (rows.length <= 0)
      {
        console.log('no_data');
      }

      let now = new Date();
      now_m = now.getTime();

      for(var i = 0; i < rows.length; i++){
        console.log(i)
        last_check_m = rows[i].last_check.getTime();
        scenario_schedulers[rows[i].scenario_id] = {"time": (now_m - last_check_m)/1000, "period": rows[i].period};
      }
      console.log(scenario_schedulers)
    }catch(err)
    {
      console.log(err);
    }
  })
})

setInterval(async() => {
  for(let [id, value] of Object.entries(scenario_schedulers)){
    if(value["time"] >= value["period"]){
      try
      {
        scenario_schedulers[id]["time"] = 1;
	await scenario.analyze(id)
      }
      catch(err)
      {
      }
    }
    else{
      scenario_schedulers[id]["time"]++;
    }
  }
}, 60000);

module.exports = app;
