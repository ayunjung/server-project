const MysqlInfo  = require('../mysqlConnect');
const mysql = require('mysql');
const con = mysql.createConnection(MysqlInfo.MysqlInfolo);

exports.deldoc = (obj, res) => {
    
    let data = 0;
    if(obj.docnum == null){
        data = 1;
        res.send({success : data});
    }
    con.query('update doc set del = 1 where docnum = ?', [obj.docnum], (error, rows, fields) => {
        if (error) throw error;
        if(data!=1){res.send({success : data})};
      })
}
/*
    'http://localhost:3001/deldoc'
        docnum : 1,
*/