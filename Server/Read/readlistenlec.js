const MysqlInfo  = require('../mysqlConnect');
const mysql = require('mysql');
const con = mysql.createConnection(MysqlInfo.MysqlInfo);

exports.readlistenlec = (obj, res) => {
    
    let data = 0;
    if(obj.email == null){
        data = 1;
        res.send({success : data, data : []});
    }
    
    con.query('select * from ulecture where ulecnum in (select ulecnum from listen where email = ?)', [obj.email], (error, rows, fields) => {
        if (error) throw error;
        if(data!=1){
            res.send({success : data, data : rows});
        }   
      })

      
}


/*
    'http://localhost:3001/readlistenlec'
        email: 'Test@naver.com',
*/

/*
output
{
    "success": 0,
    "data": [
        {
            "ulecnum": 1,
            "sort": "front",
            "teacher": "생활코딩",
            "lecpic": "pictext",
            "title": "프론트1"
        },
        {
            "ulecnum": 2,
            "sort": "front",
            "teacher": "생활코딩",
            "lecpic": "pictext",
            "title": "프론트2"
        },
        {
            "ulecnum": 3,
            "sort": "front",
            "teacher": "생활코딩",
            "lecpic": "pictext",
            "title": "프론트3"
        },
        {
            "ulecnum": 4,
            "sort": "front",
            "teacher": "생활코딩",
            "lecpic": "pictext",
            "title": "프론트4"
        }
    ]
}
*/

