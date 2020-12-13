let express = require('express');
let router = express.Router();
let db = require("../db"); //引入数据库封装模块

router.get('/', function (req, res, next) {
  let sql = `SELECT * FROM staffUsers`;
  console.log(sql);
  db(sql, function (err, vals, fields) {
    console.log(vals)
    res.json(vals)
  })
});
router.post('/', function (req, res, next) {
  console.log(req)
});

module.exports = router;