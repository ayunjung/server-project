const MysqlInfo  = require('../mysqlConnect');
const mysql = require('mysql');
const con = mysql.createConnection(MysqlInfo.MysqlInfo);

exports.readreqinfo = (obj, res) => {
    
    let data = 0;
    
    if(obj.quesnum == null){
        data = 1;
        res.send({success : data, data : []});
    }
    
        con.query('select * from question where quesnum = ?', [obj.quesnum], (error, rows, fields) => {
            if (error)  throw error;
            if(data!=1){
                res.send({success : data, data : rows[0]});
            }  
        })   
    return 0;
}




/*
    'http://localhost:3001/readreqinfo'
        quesnum: 1,
*/

/*
output
{
    "su1ccess": 0,
    "data": {
        "quesnum": 1,
        "sort": "미해결",
        "title": "제목",
        "content": "내용",
        "date": "2022-03-30T13:22:46.000Z",
        "writer": "Test@naver.com",
        "views": 0
    }
}
*/

