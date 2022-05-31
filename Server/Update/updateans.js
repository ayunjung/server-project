const MysqlInfo  = require('../mysqlConnect');
const mysql = require('mysql');
const con = mysql.createConnection(MysqlInfo.MysqlInfo);

exports.updateans = (req, res) => {
    if(req.session.logined){
        con.query('select * from answer where ansnum = ?', [req.body.ansnum], (error, rows, fields) => {
            console.log(rows[0]);
            if(rows[0].writer == req.session.sid){
                con.query('UPDATE answer SET content = ? WHERE ansnum = ?', [req.body.content ,req.body.ansnum], (error, rows2, fields) => {
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
    'http://localhost:3001/updateans'
        ansnum : 1,
        content : '수정된 내용',
*/