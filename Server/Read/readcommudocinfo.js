const MysqlInfo  = require('../mysqlConnect');
const mysql = require('mysql');
const con = mysql.createConnection(MysqlInfo.MysqlInfo);

exports.readcommudocinfo = (obj, res) => {
    
    let data = 0;
    
    if(obj.docnum == null){
        data = 1;
        res.send({success : data, data : []});
    }
    
        con.query('select * from doc where docnum = ?', [obj.docnum], (error, rows, fields) => {
            if (error)  throw error;
            if(data!=1){
                res.send({success : data, data : rows[0]});
            }  
        })   
    return 0;
}




/*
    'http://localhost:3001/readcommudocinfo'
        docnum: 1,
*/

/*
output
{
    "success": 0,
    "data": {
        "docnum": 1,
        "sort": "글",
        "title": "제목",
        "date": "2022-03-30T11:55:12.000Z",
        "writer": "Test@naver.com",
        "views": 0,
        "content": "내용"
    }
}
*/

