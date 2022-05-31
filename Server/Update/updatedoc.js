const MysqlInfo  = require('../mysqlConnect');
const mysql = require('mysql');
const con = mysql.createConnection(MysqlInfo.MysqlInfo);

exports.updatedoc = (req, res) => {
    if(req.session.logined){
        con.query('select writer from doc where docnum = ?', [req.body.docnum], (error, rows, fields) => {
            console.log(req.session.sid);
            if(rows[0].writer == req.session.sid){
                con.query('UPDATE doc SET title = ?, sort = ?, content = ? WHERE docnum = ?', [req.body.title, req.body.sort, req.body.content ,req.body.docnum], (error, rows2, fields) => {
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
    'http://localhost:3001/updatedoc'
        docnum : 1,
        title : '수정된 제목',
        content : '수정된 내용',
        sort : '프론트엔드'
*/