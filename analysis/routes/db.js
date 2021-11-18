var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var pool = mysql.createPool({
  connectionLimit: 3,
  host: "1.245.223.69",
  user: "dgusds",
  password: "dgu2021sds@)@!",
  port : 13062,
  database: "DGUSDS"
});

/* GET home page. */
router.get('/show', function (req, res, next) {

    pool.getConnection(function (err, con) {
        // Use the connection
        con.query('SELECT * FROM user', function (err, rows) {
            if (err) console.error("err : " + err);
            debug.log("rows : " + JSON.stringify(rows));

            //res.render('index', {title: 'test', rows: rows});
            res.send(JSON.stringify(rows));

            con.release();

            // Don't use the connection here, it has been returned to the pool.
        });
    });
});

/*
export.insert = function(userName) {
	console.log("insert!!");	
}*/

router.get('/insert', function (req, res, next) {
	var userName = "youngee2";
    pool.getConnection(function (err, con) {
        // Use the connection
        con.query('INSERT INTO user(nickname) VALUES (?)', [userName], function (err, rows) {
            if (err) console.error("err : " + err);
            console.log("rows : " + JSON.stringify(rows));

            //res.render('index', {title: 'test', rows: rows});
            res.send(JSON.stringify(rows));

            con.release();

            // Don't use the connection here, it has been returned to the pool.
        });
    });
});
module.exports = router;
