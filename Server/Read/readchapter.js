const MysqlInfo  = require('../mysqlConnect');
const mysql = require('mysql');
const con = mysql.createConnection(MysqlInfo.MysqlInfolo);

exports.readchapter = (obj, res) => {
    
    let data = 0;
    
    if(obj.ulecnum == null){
        data = 1;
        res.send({success : data, data : []});
    }
    
        con.query('select * from slecture where ulecnum = ?', [obj.ulecnum], (error, rows, fields) => {
            if (error)  throw error;
            if(data!=1){
                res.send({success : data, data : rows});
            }  
        })   
    return 0;
}




/*
    'http://localhost:3001/readchapter'
        ulecnum: 1,
*/

/*
output
{
    "success": 0,
    "data": [
        {
            "ulecnum": 1,
            "slecnum": 1,
            "title": "stitle",
            "content": "content",
            "views": 0,
            "date": "2022-03-30T11:10:19.000Z"
        },
        {
            "ulecnum": 1,
            "slecnum": 2,
            "title": "stitle",
            "content": "content",
            "views": 0,
            "date": "2022-03-30T11:10:36.000Z"
        },
        {
            "ulecnum": 1,
            "slecnum": 3,
            "title": "stitle",
            "content": "content",
            "views": 0,
            "date": "2022-03-30T11:10:37.000Z"
        },
        {
            "ulecnum": 1,
            "slecnum": 4,
            "title": "stitle",
            "content": "content",
            "views": 0,
            "date": "2022-03-30T11:10:38.000Z"
        },
        {
            "ulecnum": 1,
            "slecnum": 5,
            "title": "stitle",
            "content": "content",
            "views": 0,
            "date": "2022-03-30T11:10:39.000Z"
        }
    ]
}
*/

