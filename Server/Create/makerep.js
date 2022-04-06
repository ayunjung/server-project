const MysqlInfo  = require('../mysqlConnect');
const mysql = require('mysql');
const con = mysql.createConnection(MysqlInfo.MysqlInfo);

exports.makerep = (obj, res) => {
    
    let data = 0;
    if(obj.docnum&&obj.repnum&&obj.content&&obj.email == null){
        data = 1;
        res.send({success : data});
    }
    con.query('insert into reply values(default, ?, ?, default, ?, default)', [obj.docnum, obj.content, obj.email], (error, rows, fields) => {
        if (error) throw error;
        if(data!=1){res.send({success : data})};
      })
}


/*
    'http://localhost:3001/makerep'
        docnum: 1,
        content: "test rep",
        email : "test@naver.com",
*/