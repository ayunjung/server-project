const MysqlInfo  = require('../mysqlConnect');
const mysql = require('mysql');
const con = mysql.createConnection(MysqlInfo.MysqlInfo);

exports.leclisten = (obj, res) => {
    
    let data = 0;
    if(obj.email&&obj.ulecnum&&obj.slecnum == null){
        data = 1;
        res.send({success : data});
    }
    con.query('insert into listen values(?, ?, ?, default)', [obj.email, obj.ulecnum], (error, rows, fields) => {
        if(data!=1){res.send({success : data})};
      })
}


/*
    'http://localhost:3001/leclisten'
    email: "Test@naver.com",
    ulecnum: "Test-te-st",
    date: "Testing...",
*/