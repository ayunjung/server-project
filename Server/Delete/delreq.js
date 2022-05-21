const MysqlInfo  = require('../mysqlConnect');
const mysql = require('mysql');
const con = mysql.createConnection(MysqlInfo.MysqlInfo);

exports.delreq = (req, res) => {
    
    con.query('select writer from question where quesnum = ?', [req.body.quesnum], (error, rows, fields) => {
        if (error) throw error;
        if(rows.length){
            if(rows[0].writer==req.session.sid){
                con.query('update question set del = 1 where quesnum = ?', [req.body.quesnum], (error, rows, fields) => {
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
    'http://localhost:3001/delreq'
        quesnum : 1,
*/