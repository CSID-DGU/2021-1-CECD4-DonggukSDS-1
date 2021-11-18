var express = require('express');
var router = express.Router();

const db = require('../modules/db');
const sql = require('../sql');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/list', async function(req, res, next) {
  try{
    var [rows] = await db.query(sql.notice.selectNoticeAll);
    if(rows.length == 0)
      res.status(200).send({msg: "공지사항이 없습니다."});
    else {
      res.send({
        msg: "success",
        list: rows
      });
    }
  } catch(e) {
    console.log(e);
  }
});

router.post('/post', async function(req, res, next) {
  var id = req.body.id;

  try{
    var [rows] = await db.query(sql.notice.selectNoticeById, [id]);
    if(rows.length == 0)
      res.status(200).send({msg: "존재하지 않는 게시글입니다."});
    else {
      res.send({
        msg: "success",
        post: rows[0]
      });
    }
  } catch(e) {
    console.log(e);
  }
});

router.post('/add', async function(req, res, next) {
  var title = req.body.title;
  var author = req.body.author;
  var content = req.body.content;

  try{
    await db.query(sql.notice.insertNotice, [title, content, author]);
      res.send({
        msg: "success",
      });
  } catch(e) {
    console.log(e);
    res.send({
      msg: "fail"
    })
  }
});


module.exports = router;
