const MysqlInfo  = require('../mysqlConnect');
const mysql = require('mysql');
const con = mysql.createConnection(MysqlInfo.MysqlInfo);

exports.delCertifi = (obj, res) => {

    con.query('delete from userCertificate where email = ? and certificate = ?', [obj.email, obj.cert], (error, rows, fields) => {
        if (error) throw error;
        res.send({success : 0});
      })
    
}

/*
  'http://localhost:3001/delCertifi'
  email: "Test@naver.com",
  cert : "전기기사",

*/