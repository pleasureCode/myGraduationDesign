let express = require('express');
let router = express.Router();
let db = require("../db"); //引入数据库封装模块

router.get('/', function (req, res, next) {
  let sql = `SELECT *
             FROM staffUsers`;
  console.log(sql);
  db(sql, function (err, vals, fields) {
    res.json(vals)
    // vals = JSON.stringify(vals)
    // vals = JSON.parse(vals)
    // let isNo = vals.some((item)=> {
    //   return item.userName === '主管'
    // })
    // console.log(isNo)
  })
});

router.post('/login', function (req, res, next) {
  console.log(req.body.userName)
  let sql = `SELECT *
             FROM staffUsers`;
  console.log(sql);
  db(sql, function (err, vals, fields) {
    vals = JSON.stringify(vals)
    vals = JSON.parse(vals)
    let isNo = vals.some((item) => {
      return item.userName === req.body.userName
          && item.psw === req.body.psw
    })

    console.log(isNo)
    if (!isNo) {
      res.json({
        code: 0,
        msg: '登录失败',
        err: err
      })
    } else {
      res.json({
        code: 1,
        msg: '登录成功！',
        token: 'my is token：' + req.body.userName,
        username: req.body.userName
      })
    }
  })
});

router.post('/register', function (req, res, next) {
  console.log(req.body)
  let sql = `INSERT INTO staffUsers VALUES(NULL , '${req.body.userName}', '${req.body.email}' ,'${req.body.psw}', '管理员')`;
  db(sql, function (err, vals, fields) {
    if (err) {
      res.json({
        code: 0,
        msg: '添加总结失败',
        err: err
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