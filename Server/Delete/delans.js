const MysqlInfo  = require('../mysqlConnect');
const mysql = require('mysql');
const con = mysql.createConnection(MysqlInfo.MysqlInfo);

exports.delans = (obj, res) => {
    
    let data = 0;
    if(obj.ansnum == null){
        data = 1;
        res.send({success : data});
    }
    con.query('update answer set del = 1 where ansnum = ?', [obj.ansnum], (error, rows, fields) => {
        if (error) throw error;
        if(data!=1){res.send({success : data})};
      })
}
/*
    'http://localhost:3001/delans'
        ansnum : 1,
*/