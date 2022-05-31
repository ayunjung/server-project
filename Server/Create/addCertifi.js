const MysqlInfo  = require('../mysqlConnect');
const mysql = require('mysql');
const con = mysql.createConnection(MysqlInfo.MysqlInfo);

exports.addCertifi = (obj, res) => {
  
    con.query('select * from userCertificate where email = ? and certificate = ?', [obj.email, obj.cert], (error, rows, fields) => {
        if (error) throw error;    
        if(rows.length){
            res.send({success : 1});
        } else {
            con.query('insert into userCertificate values(?, ?)', [obj.email, obj.cert], (error, rows2, fields) => {
                if (error) throw error;    
                res.send({success : 0});
              })
        }
      })
    
}

/*
  'http://localhost:3001/addCertifi'
  email: "Test@naver.com",
  cert : "전기기사",

*/