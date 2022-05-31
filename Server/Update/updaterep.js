const MysqlInfo  = require('../mysqlConnect');
const mysql = require('mysql');
const con = mysql.createConnection(MysqlInfo.MysqlInfo);

exports.updaterep = (req, res) => {
    if(req.session.logined){
        con.query('select writer from reply where repnum = ?', [req.body.repnum], (error, rows, fields) => {
            console.log(rows);
            if(rows[0].writer == req.session.sid){
                con.query('UPDATE reply SET content = ? WHERE repnum = ?', [req.body.content ,req.body.repnum], (error, rows2, fields) => {
                    if (error) throw error;
                    res.send({success : 0});
                })
            } else {
                res.send({success : 1});
            }
        })
    } else {
        res.send({success : 2});
    }
}
/*
    'http://localhost:3001/updaterep'
        repnum : 1,
        content : '수정된 내용',
        
*/