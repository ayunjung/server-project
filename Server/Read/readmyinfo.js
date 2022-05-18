const MysqlInfo  = require('../mysqlConnect');
const mysql = require('mysql');
const con = mysql.createConnection(MysqlInfo.MysqlInfo);

exports.readmyinfo = (req, res) => {
    let data=0;
    console.log(req.session);
    console.log(req.session.sid);
    if(req.session.logined){
        console.log('gd');
        con.query('select * from user where email = ?', [req.session.sid], (error, rows, fields) => {
            if (error) throw error;
            res.send({success : 0, info : rows[0]});
        })
    } else {
        console.log('qd');
    }
}

























/*
    'http://localhost:3001/readmyinfo'
        session_id: 'skantrkwl789@naver.com',
*/

/*
output
    {
        "success": 0,
        "info": {
            "email": "Test@naver.com",
            "birth": "Test-te-st",
            "job": "Testman",
            "comment": "Testing...",
            "profilepic": "Testpic"
        }
    }
*/