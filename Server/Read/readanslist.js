const MysqlInfo  = require('../mysqlConnect');
const mysql = require('mysql');
const con = mysql.createConnection(MysqlInfo.MysqlInfo);

exports.readanslist = (obj, res) => {
    let data = 0;

    if(obj.quesnum == null){
        data = 1;
        res.send({success : data, data : []});
    }

    con.query('select * from answer where quesnum = ? and del = 0', [obj.quesnum], (error, rows, fields) => {
        if (error)  throw error;
        if(data!=1){
            res.send({success : data, data : rows});
        }
    })
    return 0;
}

/*
    'http://localhost:3001/readanslist'
        quesnum: 1,
*/

/*
output
{
    "success": 0,
    "data": [
        {
            "quesnum": 1,
            "ansnum": 1,
            "content": "내용",
            "date": "2022-03-30T13:33:42.000Z",
            "writer": "Test@naver.com",
            "vieews": 0
        },
        {
            "quesnum": 1,
            "ansnum": 2,
            "content": "내용",
            "date": "2022-03-30T13:33:46.000Z",
            "writer": "Test@naver.com",
            "vieews": 0
        },
        {
            "quesnum": 1,
            "ansnum": 3,
            "content": "내용",
            "date": "2022-03-30T13:33:47.000Z",
            "writer": "Test@naver.com",
            "vieews": 0
        },
        {
            "quesnum": 1,
            "ansnum": 4,
            "content": "내용",
            "date": "2022-03-30T13:33:47.000Z",
            "writer": "Test@naver.com",
            "vieews": 0
        },
        {
            "quesnum": 1,
            "ansnum": 5,
            "content": "내용",
            "date": "2022-03-30T13:33:48.000Z",
            "writer": "Test@naver.com",
            "vieews": 0
        }
    ]
}
*/

