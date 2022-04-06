const MysqlInfo  = require('../mysqlConnect');
const mysql = require('mysql');
const con = mysql.createConnection(MysqlInfo.MysqlInfo);

exports.joinuser = (obj, res) => {
  
    let data = 0;
    con.query('select * from user where email = ?', [obj.email], (error, rows, fields) => {
        if(rows.length == 1) {
            data = 1;
            res.send({success : data})
        };
      })
    con.query('insert into user values(?, ?, ?, ?, ?)', [obj.email, obj.birth, obj.job, obj.comment, obj.profilepic], (error, rows, fields) => {
        if(data!=1){res.send({success : data})};
      })
}

/*
  'http://localhost:3001/join'
  email: "Test@naver.com",
  birth: "Test-te-st",
  job: "Testman",
  comment: "Testing...",
  profilepic: "Testpic",
*/