const MysqlInfo  = require('../mysqlConnect');
const mysql = require('mysql');
const con = mysql.createConnection(MysqlInfo.MysqlInfo);

exports.delreq = (obj, res) => {
    
    let data = 0;
    if(obj.quesnum == null){
        data = 1;
        res.send({success : data});
    }
    con.query('update question set del = 1 where quesnum = ?', [obj.quesnum], (error, rows, fields) => {
        if (error) throw error;
        if(data!=1){res.send({success : data})};
      })
}
/*
    'http://localhost:3001/delreq'
        quesnum : 1,
*/