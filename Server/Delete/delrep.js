const MysqlInfo  = require('../mysqlConnect');
const mysql = require('mysql');
const con = mysql.createConnection(MysqlInfo.MysqlInfo);

exports.delrep = (obj, res) => {
    
    let data = 0;
    if(obj.repnum == null){
        data = 1;
        res.send({success : data});
    }
    con.query('update reply set del = 1 where repnum = ?', [obj.repnum], (error, rows, fields) => {
        if (error) throw error;
        if(data!=1){res.send({success : data})};
      })
}
/*
    'http://localhost:3001/delrep'
        repnum : 1,
*/