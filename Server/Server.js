const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const MysqlInfo  = require('./mysqlConnect');
const session = require('express-session');
const MySQLStore = require('express-mysql-session');
const cookieparser = require('cookie-parser');
const axios = require('axios');
const helmet = require('helmet');

axios.defaults.withCredentials= true;
app.use(helmet());
app.use(express.json());
app.use(cors({origin : true, credentials: true}));

app.use(cookieparser())
//mysql
const mysql = require('mysql');
const con = mysql.createConnection(MysqlInfo.MysqlInfo);
con.connect();

app.set('trust proxy', 1);

//session
const login = require('./Login/session')

sessionStore = new MySQLStore(MysqlInfo.MysqlInfo);
app.use(session({
  secret: 'session_secret',
  store: sessionStore,
  resave: false,
  saveUninitialized : false,
}));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  })

  app.post('/login', (req, res)=>{
    login.login(req, res);
  })

  app.post('/logout', (req, res)=>{
    login.logout(req, res);
  })
  
//C
const joinuser = require('./Create/join');
const leclisten = require('./Create/leclisten');
const makedoc = require('./Create/makedoc');
const makerep = require('./Create/makerep');
const makereq = require('./Create/makereq');
const makeans = require('./Create/makeans');
const makerev = require('./Create/makerev');

//R
const readuserinfo = require('./Read/userinfo');
const readlistenlec = require('./Read/readlistenlec');
const readleclist = require('./Read/readleclist');
const readlecinfo = require('./Read/readlecinfo');
const readchapter = require('./Read/readchapter');
const readslecinfo = require('./Read/readslecinfo');
const readcommulist = require('./Read/readcommulist');
const readcommudocinfo = require('./Read/readcommudocinfo');
const readreply = require('./Read/readreply');
const readreqlist = require('./Read/readreqlist');
const readreqinfo = require('./Read/readreqinfo');
const readanslist = require('./Read/readanslist');
const readrevlist = require('./Read/readrevlist');
const readmyinfo = require('./Read/readmyinfo');

//D
const delans = require('./Delete/delans');
const deldoc = require('./Delete/deldoc');
const delrep = require('./Delete/delrep');
const delreq = require('./Delete/delreq');
const delrev = require('./Delete/delrev');

app.get('/', (req, res)=>{
  console.log(req.session);
  res.sendFile('C:/Users/skant/OneDrive/Desktop/Projects/lectureCite/client/Server/index.html');
}
)

/*C*/
app.post('/join', (req, res) => {
  joinuser.joinuser(req.body,res);
})

app.post('/leclisten', (req, res) => {
  leclisten.leclisten(req.body,res);
})

app.post('/makedoc', (req, res) => {
  makedoc.makedoc(req.body,res);
})

app.post('/makerep', (req, res) => {
  makerep.makerep(req.body,res);
})

app.post('/makereq', (req, res) => {
  makereq.makereq(req.body,res);
})

app.post('/makeans', (req, res) => {
  makeans.makeans(req.body,res);
})

app.post('/makerev', (req, res) => {
  makerev.makerev(req.body,res);
})

/*R*/
app.post('/readuserinfo', (req, res) => {
  readuserinfo.readuserinfo(req.body,res);
})

app.post('/readlistenlec', (req, res) => {
  readlistenlec.readlistenlec(req.body,res);
})

app.post('/readleclist', (req, res) => {
  readleclist.readleclist(req.body,res);
})

app.post('/readlecinfo', (req, res) => {
  readlecinfo.readlecinfo(req.body,res);
})

app.post('/readchapter', (req, res) => {
  readchapter.readchapter(req.body,res);
})

app.post('/readslecinfo', (req, res) => {
  readslecinfo.readslecinfo(req.body,res);
})

app.post('/readcommulist', (req, res) => {
  readcommulist.readcommulist(req.body,res);
})

app.post('/readcommudocinfo', (req, res) => {
  readcommudocinfo.readcommudocinfo(req.body,res);
})

app.post('/readreply', (req, res) => {
  readreply.readreply(req.body,res);
})

app.post('/readreqlist', (req, res) => {
  readreqlist.readreqlist(req.body,res);
})

app.post('/readreqinfo', (req, res) => {
  readreqinfo.readreqinfo(req.body,res);
})

app.post('/readanslist', (req, res) => {
  readanslist.readanslist(req.body,res, con);
})

app.post('/readrevlist', (req, res) => {
  readrevlist.readrevlist(req.body,res);
})

app.post('/readmyinfo', (req, res)=> {
  readmyinfo.readmyinfo(req, res);
})


/*U*/
app.post('/delans', (req, res) => {
  delans.delans(req.body,res);
})

app.post('/delreq', (req, res) => {
  delreq.delreq(req.body,res);
})

app.post('/delrev', (req, res) => {
  delrev.delrev(req.body,res);
})

app.post('/deldoc', (req, res) => {
  deldoc.deldoc(req.body,res);
})

app.post('/delrep', (req, res) => {
  delrep.delrep(req.body,res);
})


//session
