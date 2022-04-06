const MysqlInfo  = require('../mysqlConnect');
const mysql = require('mysql');
const con = mysql.createConnection(MysqlInfo.MysqlInfo);

exports.makerev = (obj, res) => {
    
    let data = 0;
    if(obj.ulecnum&&obj.title&&obj.content&&obj.email == null){
        data = 1;
        res.send({success : data});
    }
    con.query('insert into review values(default, ?, ?, ?, default, ?, default)', [obj.ulecnum, obj.title, obj.content, obj.email], (error, rows, fields) => {
        if (error) throw error;
        if(data!=1){res.send({success : data})};
      })
}


/*
    'http://localhost:3001/makerev'
        ulecnum : 1,
        title : 'Test',
        content: 'testContent',
        email: 'skantrkwl789@naver.com',
*/