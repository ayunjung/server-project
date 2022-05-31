const MysqlInfo  = require('../mysqlConnect');
const mysql = require('mysql');
const con = mysql.createConnection(MysqlInfo.MysqlInfo);

exports.updatereq = (req, res) => {
    if(req.session.logined){
        con.query('select * from question where quesnum = ?', [req.body.quesnum], (error, rows, fields) => {
            console.log(rows[0]);
            if(rows[0].writer == req.session.sid){
                con.query('UPDATE question SET title = ?, content = ? WHERE quesnum = ?', [req.body.title, req.body.content ,req.body.quesnum], (error, rows2, fields) => {
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
    'http://localhost:3001/updatereq'
        reㅂnum : 1,
        title : '수정된 제목',
        content : '수정된 내용',
*/