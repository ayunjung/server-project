const MysqlInfo  = require('../mysqlConnect');
const mysql = require('mysql');
const con = mysql.createConnection(MysqlInfo.MysqlInfo);

exports.readcommulist = (obj, res) => {
    
    let data = 0;
    
    /*if(obj.ulecnum == null){
        data = 1;
        res.send({success : data, data : []});
    }*/
    
        con.query('select * from doc',/* [obj.ulecnum, obj.slecnum], */ (error, rows, fields) => {
            if (error)  throw error;
            if(data!=1){
                res.send({success : data, data : rows});
            }  
        })   
    return 0;
}




/*
    'http://localhost:3001/readcommulist'
*/

/*
output
{
    "success": 0,
    "data": [
        {
            "docnum": 1,
            "sort": "글",
            "title": "제목",
            "date": "2022-03-30T11:55:12.000Z",
            "writer": "Test@naver.com",
            "views": 0,
            "content": "내용"
        },
        {
            "docnum": 2,
            "sort": "글",
            "title": "제목2",
            "date": "2022-03-30T11:55:20.000Z",
            "writer": "Test@naver.com",
            "views": 0,
            "content": "내용"
        },
        {
            "docnum": 3,
            "sort": "글",
            "title": "제목3",
            "date": "2022-03-30T11:55:22.000Z",
            "writer": "Test@naver.com",
            "views": 0,
            "content": "내용"
        },
        {
            "docnum": 4,
            "sort": "글",
            "title": "제목4",
            "date": "2022-03-30T11:55:23.000Z",
            "writer": "Test@naver.com",
            "views": 0,
            "content": "내용"
        },
        {
            "docnum": 5,
            "sort": "글",
            "title": "제목5",
            "date": "2022-03-30T11:55:24.000Z",
            "writer": "Test@naver.com",
            "views": 0,
            "content": "내용"
        },
        {
            "docnum": 6,
            "sort": "글",
            "title": "제목6",
            "date": "2022-03-30T11:55:24.000Z",
            "writer": "Test@naver.com",
            "views": 0,
            "content": "내용"
        },
        {
            "docnum": 7,
            "sort": "글",
            "title": "제목7",
            "date": "2022-03-30T11:55:25.000Z",
            "writer": "Test@naver.com",
            "views": 0,
            "content": "내용"
        }
    ]
}
*/

