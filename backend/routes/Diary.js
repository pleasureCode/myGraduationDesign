let express = require('express');
let router = express.Router();
let db = require("../db"); //引入数据库封装模块

router.get('/', function (req, res, next) {
  // db.query("SELECT * FROM staffdiary", [], function (results, fields) {
  //   console.log(results);
  //   res.json(results)
  // })
  let sql = `SELECT *
             FROM staffdiary`;
  console.log(sql);
  db(sql, function (err, vals, fields) {
    console.log(vals)
    res.json(vals)
  })
});

router.post('/addDiary', function (req, res, next) {
  console.log(req.body)
  let sql = `INSERT INTO staffDiary VALUES(NULL , '${req.body.userName}', '${req.body.diaryTitle}' ,'${req.body.diaryContent}', '${req.body.diaryTime}')`;

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

  // 获取用户名
  // let sqlIsUsername = `SELECT *
  //                      FROM staffUsers`;
  //
  // db(sqlIsUsername, function (err, vals, fields) {
  //   vals = JSON.stringify(vals)
  //   vals = JSON.parse(vals)
  //   let aLLUsername = vals
  //   // let isNo = vals.some((item)=> {
  //   //   return item.username === '主管'
  //   // })
  //   // console.log(isNo)
  //
  //   console.log(aLLUsername)
  //   let isUsername = aLLUsername.some((item) => {
  //     return item.userName === req.body.userName
  //   })
  //   console.log(isUsername)
  //   console.log(req.body.userName)
  //   if (isUsername) {
  //     db(sql, function (err, vals, fields) {
  //       if (err) {
  //         res.json({
  //           code: 0,
  //           msg: '添加总结失败',
  //           err: err
  //         })
  //       } else {
  //         res.json({
  //           code: 1,
  //           msg: '添加总结成功！'
  //         })
  //       }
  //     })
  //   } else {
  //     res.json({
  //       code: 0,
  //       msg: '添加总结失败，未能找到该用户'
  //     })
  //   }
  // })

});

module.exports = router;