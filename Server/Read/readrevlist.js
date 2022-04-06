const MysqlInfo  = require('../mysqlConnect');
const mysql = require('mysql');
const con = mysql.createConnection(MysqlInfo.MysqlInfolo);

exports.readrevlist = (obj, res) => {
    
    let data = 0;
    
    if(obj.ulecnum == null){
        data = 1;
        res.send({success : data, data : []});
    }
    
        con.query('select * from review where ulecnum = ?', [obj.ulecnum], (error, rows, fields) => {
            if (error)  throw error;
            if(data!=1){
                res.send({success : data, data : rows});
            }  
        })   
    return 0;
}

/*
    'http://localhost:3001/readrevlist'
        docnum: 1,
*/

/*
output
{
    "success": 0,
    "data": [
        {
            "revnum": 1,
            "ulecnum": 1,
            "title": "TestTitle",
            "content": "TestContent",
            "date": "2022-04-04T12:57:54.000Z",
            "writer": "Test@naver.com"
        },
        {
            "revnum": 2,
            "ulecnum": 1,
            "title": "TestTitle2",
            "content": "TestContent",
            "date": "2022-04-04T12:57:59.000Z",
            "writer": "Test@naver.com"
        },
        {
            "revnum": 3,
            "ulecnum": 1,
            "title": "TestTitle3",
            "content": "TestContent",
            "date": "2022-04-04T12:57:59.000Z",
            "writer": "Test@naver.com"
        },
    ]
}
*/

