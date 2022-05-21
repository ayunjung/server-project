const MysqlInfo  = require('../mysqlConnect');
const mysql = require('mysql');
const con = mysql.createConnection(MysqlInfo.MysqlInfo);

exports.delans = (req, res) => {
    
    con.query('select writer from answer where ansnum = ?', [req.body.ansnum], (error, rows, fields) => {
        if (error) throw error;
        if(rows.length){
            if(rows[0].writer==req.session.sid){
                con.query('update answer set del = 1 where ansnum = ?', [req.body.ansnum], (error, rows, fields) => {
                    if (error) throw error;
                    res.send({success : 0});
                  })
            } else {
                res.send({success : 1});
            }
        } else {
            res.send({success : 2});
        }
      })
}
/*
    'http://localhost:3001/delans'
        ansnum : 1,
*/