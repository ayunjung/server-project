const MysqlInfo  = require('../mysqlConnect');
const mysql = require('mysql');
const con = mysql.createConnection(MysqlInfo.MysqlInfo);

exports.readleclist = (req, res) => {
    
    let data = 0;

   if(req.body.sort !== '전체보기'){
       //분류에 따른 글 데이터 가져오기
        con.query('select * from ulecture where sort = ?', [req.body.sort], (error, rows, fields) => {
            if (error)  throw error;
            //큰강의에 속하는 모든 작은강의의 조회수 합 가져오기
            con.query('select ulecnum, sum(views) from slecture group by ulecnum', /*[req.body.sort], */ (error, rows2, fields) => {
                if (error)  throw error;
                //큰강의를 구독한 사람의 수 가져오기
                con.query('select ulecnum, count(ulecnum) from listen group by ulecnum', /*[req.body.sort], */ (error, rows3, fields) => {
                    let outdata = rows;
                    console.log(rows3);
                    //객체에 views값 지정
                    rows.map((item, i) => {
                        rows2.map((item2, j)=>{
                            if(item.ulecnum == item2.ulecnum){
                                outdata[i] = {...outdata[i], views : Object.values(JSON.parse(JSON.stringify(rows2[j])))[1]}
                            }
                        })
                    })
                    //객체에 subs값 지정
                    rows.map((item, i) => {
                        rows3.map((item3, j)=>{
                            if(item.ulecnum == item3.ulecnum){
                                console.log(Object.values(JSON.parse(JSON.stringify(rows3[j])))[1]);
                                outdata[i] = {...outdata[i], subs : Object.values(JSON.parse(JSON.stringify(rows3[j])))[1]}
                            }
                        })
                    })
                    outdata.map((data)=>{
                        //객체에 데이터 없을 시 초기값 지정
                        if(!data.views){
                            data.views=0;
                        }

                        if(!data.subs){
                            data.subs=0;
                        }
                    })
                    console.log(outdata);
                    res.send({success : data, data : outdata});
                })
            })
        })   
    } else {
        con.query('select * from ulecture', [req.body.sort], (error, rows, fields) => {
            if (error)  throw error;
            if(rows.length){
            con.query('select ulecnum, sum(views) from slecture group by ulecnum', /*[req.body.sort], */ (error, rows2, fields) => {
                if (error)  throw error;
                con.query('select ulecnum, count(ulecnum) from listen group by ulecnum', /*[req.body.sort], */ (error, rows3, fields) => {
                    let outdata = rows;
                    console.log(rows3);
                    rows.map((item, i) => {
                        rows2.map((item2, j)=>{
                            if(item.ulecnum == item2.ulecnum){

                                outdata[i] = {...outdata[i], views : Object.values(JSON.parse(JSON.stringify(rows2[j])))[1]}
                            }
                        })
                    })
                    rows.map((item, i) => {
                        rows3.map((item3, j)=>{
                            if(item.ulecnum == item3.ulecnum){
                                console.log(Object.values(JSON.parse(JSON.stringify(rows3[j])))[1]);
                                outdata[i] = {...outdata[i], subs : Object.values(JSON.parse(JSON.stringify(rows3[j])))[1]}
                            }
                        })
                    })
                    outdata.map((data)=>{
                        if(!data.views){
                            data.views=0;
                        }

                        if(!data.subs){
                            data.subs=0;
                        }
                    })
                    console.log(outdata);
                    res.send({success : data, data : outdata});
                })
            })
        }
        }) 
    }
}
/*
    'http://localhost:3001/readleclist'
*/

/*
output
{
    "success": 0,
    "data": [
        {
            "ulecnum": 1,
            "sort": "front",
            "teacher": "생활코딩",
            "lecpic": "pictext",
            "title": "프론트1"
        },
        {
            "ulecnum": 2,
            "sort": "front",
            "teacher": "생활코딩",
            "lecpic": "pictext",
            "title": "프론트2"
        },
        {
            "ulecnum": 3,
            "sort": "front",
            "teacher": "생활코딩",
            "lecpic": "pictext",
            "title": "프론트3"
        },
        {
            "ulecnum": 4,
            "sort": "front",
            "teacher": "생활코딩",
            "lecpic": "pictext",
            "title": "프론트4"
        }
    ]
}
*/

