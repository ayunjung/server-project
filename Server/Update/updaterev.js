const MysqlInfo  = require('../mysqlConnect');
const mysql = require('mysql');
const con = mysql.createConnection(MysqlInfo.MysqlInfo);

exports.updaterev = (req, res) => {
    if(req.session.logined){
        con.query('select * from review where revnum = ?', [req.body.revnum], (error, rows, fields) => {
            console.log(rows[0]);
            if(rows[0].writer == req.session.sid){
                con.query('UPDATE review SET content = ? WHERE revnum = ?', [req.body.content ,req.body.revnum], (error, rows2, fields) => {
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
    'http://localhost:3001/updaterev'
        ansnum : 1,
        content : '수정된 내용',
*/