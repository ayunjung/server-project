const MysqlInfo  = require('../mysqlConnect');
const mysql = require('mysql');
const con = mysql.createConnection(MysqlInfo.MysqlInfolo);

exports.readreply = (obj, res) => {
    
    let data = 0;
    
    if(obj.docnum == null){
        data = 1;
        res.send({success : data, data : []});
    }
    
        con.query('select * from reply where docnum = ?', [obj.docnum], (error, rows, fields) => {
            if (error)  throw error;
            if(data!=1){
                res.send({su1ccess : data, data : rows});
            }  
        })   
    return 0;
}




/*
    'http://localhost:3001/readreply'
        docnum: 1,
*/

/*
output
{
    "su1ccess": 0,
    "data": [
        {
            "repnum": 1,
            "docnum": 1,
            "content": "TestContent",
            "date": null,
            "writer": "Test@naver.com"
        },
        {
            "repnum": 2,
            "docnum": 1,
            "content": "TestContent2",
            "date": null,
            "writer": "Test@naver.com"
        },
        {
            "repnum": 3,
            "docnum": 1,
            "content": "TestContent3",
            "date": null,
            "writer": "Test@naver.com"
        },
        {
            "repnum": 4,
            "docnum": 1,
            "content": "TestContent4",
            "date": null,
            "writer": "Test@naver.com"
        },
    ]
}
*/

