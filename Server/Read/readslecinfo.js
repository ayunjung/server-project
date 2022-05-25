const MysqlInfo  = require('../mysqlConnect');
const mysql = require('mysql');
const con = mysql.createConnection(MysqlInfo.MysqlInfo);

exports.readslecinfo = (obj, res) => {    
        con.query('select * from slecture where slecnum = ?', [obj.slecnum], (error, rows, fields) => {
            if (error)  throw error;
            let lastviews = rows[0].views;
            con.query('UPDATE slecture SET views = ? where slecnum = ?;', [lastviews+1, obj.slecnum], (error, rows, fields) => {
                    res.send({success : 0, data : rows[0]});
            })
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

