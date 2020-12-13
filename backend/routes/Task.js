let express = require('express');
let router = express.Router();
let db = require("../db"); //引入数据库封装模块

router.get('/', function (req, res, next) {
  let sql = `SELECT *FROM task`
  db(sql, function (err, vals, fields) {
    // console.log(vals)
    res.json(vals)
  })

});

router.post('/addTask', function (req, res, next) {
  console.log(req.body.taskGetName)
  let sql = `INSERT INTO task VALUES(NULL , '${req.body.taskGetName}', '${req.body.taskSendName}', '${req.body.taskTitle}', '${req.body.taskContent}', '${req.body.taskTime}', '${req.body.taskFinishTime}')`;
  db(sql, function (err, vals, fields) {
    if (err) {
      res.json({
        code: 0,
        msg: '添加任务失败'
      })
    } else {
      res.json({
        code: 1,
        msg: '添加任务成功'
      })
    }
  })
});

module.exports = router;