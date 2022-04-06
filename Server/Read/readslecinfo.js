const MysqlInfo  = require('../mysqlConnect');
const mysql = require('mysql');
const con = mysql.createConnection(MysqlInfo.MysqlInfolo);

exports.readslecinfo = (obj, res) => {
    
    let data = 0;
    
    if(obj.slecnum == null){
        data = 1;
        res.send({success : data, data : []});
    }
    
        con.query('select * from slecture where slecnum = ?', [obj.slecnum], (error, rows, fields) => {
            if (error)  throw error;
            if(data!=1){
                res.send({success : data, data : rows[0]});
            }  
        })   
    return 0;
}




/*
    'http://localhost:3001/readslecinfo'
        ulecnum: 1,
*/

/*
output
{
    "success": 0,
    "data": {
        "ulecnum": 1,
        "slecnum": 1,
        "title": "stitle",
        "content": "content",
        "views": 0,
        "date": "2022-03-30T11:10:19.000Z"
    }
}
*/

