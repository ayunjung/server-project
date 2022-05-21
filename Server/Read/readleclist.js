const MysqlInfo  = require('../mysqlConnect');
const mysql = require('mysql');
const con = mysql.createConnection(MysqlInfo.MysqlInfo);

exports.readleclist = (req, res) => {
    
    let data = 0;
    /*
    if(obj.email == null){
        data = 1;
        res.send({success : data, data : []});
    }
    */
   if(req.body.sort !== '전체보기'){
        con.query('select * from ulecture where sort = ?', [req.body.sort], (error, rows, fields) => {
            if (error)  throw error;
            if(data!=1){
                res.send({success : data, data : rows});
            }   
        })   
    } else {
        con.query('select * from ulecture', [req.body.sort], (error, rows, fields) => {
            if (error)  throw error;
            if(data!=1){
                res.send({success : data, data : rows});
            }   
        }) 
    }
}
/*
    'http://localhost:3001/readleclist'
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

