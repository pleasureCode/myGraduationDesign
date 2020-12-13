let express = require('express');
let router = express.Router();
let db = require("../db"); //引入数据库封装模块

router.get('/', function (req, res, next) {
  // db.query("SELECT * FROM staffdiary", [], function (results, fields) {
  //   console.log(results);
  //   res.json(results)
  // })
  let sql = `SELECT * FROM staffdiary`;
  console.log(sql);
  db(sql, function (err, vals, fields) {
    console.log(vals)
    res.json(vals)
  })
});

router.post('/addDiary', function (req, res, next) {
  console.log(req.body.USERID)
  let sql = `INSERT INTO staffDiary VALUES(NULL , '${req.body.userName}', '${req.body.userId}', '${req.body.diaryContent}', '${req.body.diaryTime}')`;
  db(sql, function (err, vals, fields) {
    if (err) {
      res.json({
        code: 0,
        msg: '添加总结失败'
      })
    } else {
      res.json({
        code: 1,
        msg: '添加总结成功！'
      })
    }
  })
});

module.exports = router;