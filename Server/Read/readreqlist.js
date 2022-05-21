const MysqlInfo  = require('../mysqlConnect');
const mysql = require('mysql');
const con = mysql.createConnection(MysqlInfo.MysqlInfo);

exports.readreqlist = (obj, res) => {
    
    let data = 0;
    /*
    if(obj.docnum == null){
        data = 1;
        res.send({success : data, data : []});
    }
    */
        con.query('select * from question where del = 0', /*[obj.docnum], */(error, rows, fields) => {
            if (error)  throw error;
            if(data!=1){
                res.send({success : data, data : rows});
            }  
        })   
    return 0;
}




/*
    'http://localhost:3001/readreqlist'
*/

/*
output
{
    "su1ccess": 0,
    "data": [
        {
            "quesnum": 1,
            "sort": "미해결",
            "title": "제목",
            "content": "내용",
            "date": "2022-03-30T13:22:46.000Z",
            "writer": "Test@naver.com",
            "views": 0
        },
        {
            "quesnum": 2,
            "sort": "미해결",
            "title": "제목2",
            "content": "내용",
            "date": "2022-03-30T13:22:54.000Z",
            "writer": "Test@naver.com",
            "views": 0
        },
        {
            "quesnum": 3,
            "sort": "미해결",
            "title": "제목3",
            "content": "내용",
            "date": "2022-03-30T13:22:55.000Z",
            "writer": "Test@naver.com",
            "views": 0
        },
        {
            "quesnum": 4,
            "sort": "미해결",
            "title": "제목4",
            "content": "내용",
            "date": "2022-03-30T13:22:56.000Z",
            "writer": "Test@naver.com",
            "views": 0
        },
        {
            "quesnum": 5,
            "sort": "미해결",
            "title": "제목5",
            "content": "내용",
            "date": "2022-03-30T13:22:57.000Z",
            "writer": "Test@naver.com",
            "views": 0
        }
    ]
}
*/

