const MysqlInfo  = require('../mysqlConnect');
const mysql = require('mysql');
const con = mysql.createConnection(MysqlInfo.MysqlInfo);

exports.readuserinfo = (obj, res) => {
    
    let data = 0;
    if(obj.email == null){
        data = 1;
        res.send({success : data, info : []});
    }
    con.query('select * from user where email = ?', [obj.email], (error, rows, fields) => {
        if (error) throw error;
        if(data!=1){res.send({success : data, info : rows[0]})};
      })
}


/*
    'http://localhost:3001/readuserinfo'
        email: 'Test@naver.com',
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