const MysqlInfo  = require('../mysqlConnect');
const mysql = require('mysql');
const con = mysql.createConnection(MysqlInfo.MysqlInfolo);

exports.delrev = (obj, res) => {
    
    let data = 0;
    if(obj.revnum == null){
        data = 1;
        res.send({success : data});
    }
    con.query('update review set del = 1 where revnum = ?', [obj.revnum], (error, rows, fields) => {
        if (error) throw error;
        if(data!=1){res.send({success : data})};
      })
}
/*
    'http://localhost:3001/delrev'
        revnum : 1,
*/