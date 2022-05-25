const MysqlInfo  = require('../mysqlConnect');
const mysql = require('mysql');
const con = mysql.createConnection(MysqlInfo.MysqlInfo);

exports.readusercertifi = (req, res) => {
    
        con.query('select certificate from userCertificate where email = ?', [req.body.email], (error, rows, fields) => {
            if (error) res.send({success : 1});
            if (rows.length){
                res.send({success : 0, data : rows});
            } else {
                res.send({success : 1});
            }
        }) 
    return 0;
}

/*
    'http://localhost:3001/readusercertifi'
*/