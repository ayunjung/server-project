//프로필사진, 직업, 소유 자격증 추가 및 삭제, 간단한 소개
const MysqlInfo  = require('../mysqlConnect');
const mysql = require('mysql');
const con = mysql.createConnection(MysqlInfo.MysqlInfo);

exports.updateuserinfo = (req, res) => {
    if(req.session.logined){
        con.query('select * from user where email = ?', [req.session.sid], (error, rows, fields) => {
            if(rows[0]){
                con.query('UPDATE user SET job = ?, comment = ?, profilepic = ? WHERE email = ?', [req.body.job, req.body.comment, req.body.profilepic, req.session.sid], (error, rows2, fields) => {
                    if (error) throw error;
                    res.send({success : 0});// 정상변경 완료
                })
            } else {
                res.send({success : 1}); // 존재하지 않는 사용자
            }
        })
    } else {
        res.send({success : 2}); // 로그인 되어있지 않음
    }
}
/*
    'http://localhost:3001/updateuserinfo'
        job : '학생',
        comment : 'test comment',
        profilepic : 'test profile',
*/