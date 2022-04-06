const MysqlInfo  = require('../mysqlConnect');
const mysql = require('mysql');
const con = mysql.createConnection(MysqlInfo.MysqlInfo);

exports.makedoc = (obj, res) => {
    
    let data = 0;
    if(obj.email&&obj.title&&obj.sort&&obj.content == null){
        data = 1;
        res.send({success : data});
    }
    con.query('insert into doc values(default, ?, ?, default, ?, 0, ?, default)', [obj.sort, obj.title, obj.email, obj.content], (error, rows, fields) => {
        if (error) throw error;
        if(data!=1){res.send({success : data})};
      })
}


/*
    'http://localhost:3001/makedoc'
    email: "Test@naver.com",
        title: "1",
        sort : "gd",
        content : "gd",
*/