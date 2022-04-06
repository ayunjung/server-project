const MysqlInfo  = require('../mysqlConnect');
const mysql = require('mysql');
const con = mysql.createConnection(MysqlInfo.MysqlInfo);

exports.makereq = (obj, res) => {
    
    let data = 0;
    if(obj.sort&&obj.title&&obj.content&&obj.email == null){
        data = 1;
        res.send({success : data});
    }
    con.query('insert into question values(default, ?, ?, ?, default, ?, 0, default)', [obj.sort, obj.title, obj.content, obj.email], (error, rows, fields) => {
        if (error) throw error;
        if(data!=1){res.send({success : data})};
      })
}


/*
    'http://localhost:3001/makereq'
        sort: 'testSort',
        title: 'testTitle',
        content: "test rep",
        email: "test@naver.com",
*/