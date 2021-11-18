var express = require('express');
var router = express.Router();

const db = require('../modules/db');
const sql = require('../sql');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', async function(req, res, next) {
  var userId = req.body.userId;
  var userPw = req.body.userPw;

  try{
    var [rows] = await db.query(sql.user.selectUserByUserId, [userId]);
    if(rows.length == 0)
      res.status(200).send({msg: "존재하지 않는 아이디입니다."});
    else {
      rows = rows[0];

      if(rows.userid == userId && rows.userpw == userPw){
        res.send({
          msg: "success",
          name: rows.name,
          role: rows.role
        });
      }
      else{
        res.send({msg: "비밀번호를 확인해주세요"});
      }
    }
  } catch(e) {
    console.log(e);
  }
});

module.exports = router;
