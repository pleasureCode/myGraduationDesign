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
  console.log(req.body)
  let sql = `INSERT INTO task VALUES(NULL , '${req.body.taskGetName}', '${req.body.taskSendName}', '${req.body.taskTitle}', '${req.body.taskContent}', '${req.body.taskTime}', '${req.body.taskFinishTime}')`;

  // 获取用户名
  let sqlIsUsername = `SELECT *
                       FROM staffUsers`;

  db(sqlIsUsername, function (err, vals, fields) {
    vals = JSON.stringify(vals)
    vals = JSON.parse(vals)
    let aLLUsername = vals
    // let isNo = vals.some((item)=> {
    //   return item.username === '主管'
    // })
    // console.log(isNo)

    console.log(aLLUsername)
    let isUsername = aLLUsername.some((item) => {
      return item.userName === req.body.taskGetName
    })
    console.log(isUsername)
    console.log(req.body.taskGetName)
    if (isUsername) {
      db(sql, function (err, vals, fields) {
        if (err) {
          res.json({
            code: 0,
            msg: '添加任务失败',
            err: err
          })
        } else {
          res.json({
            code: 1,
            msg: '添加任务成功！'
          })
        }
      })
    } else {
      res.json({
        code: 0,
        msg: '添加任务失败，未能找到该用户'
      })
    }
  })

});

module.exports = router;