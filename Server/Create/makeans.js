const MysqlInfo  = require('../mysqlConnect');
const mysql = require('mysql');
const con = mysql.createConnection(MysqlInfo.MysqlInfo);

exports.makeans = (obj, res) => {
    
    let data = 0;
    if(obj.reqnum&&obj.ansnum&&obj.content&&obj.email == null){
        data = 1;
        res.send({success : data});
    }
    con.query('insert into answer values(default, ?, ?, default, ?, 0, default)', [obj.reqnum, obj.content, obj.email], (error, rows, fields) => {
        if (error) throw error;
        if(data!=1){res.send({success : data})};
      })
}


/*
    'http://localhost:3001/makeans'
        reqnum : 1,
        content: 'testContent',
        email: 'skantrkwl789@naver.com',
*/