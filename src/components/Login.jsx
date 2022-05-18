import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'

const Loginform = styled.form `
  width: 500px;
  font-size: 15px;
`

const Userinput = styled.input `
  margin: 5px 0;
  width: 100%;
  height: 70px;
  border: 1px solid #999;
  border-radius: 5px;
  font-size: 25px;
  box-sizing: border-box;
`

const Checkbox = styled.input `
  margin: 2px;
`

const Loginbtn = styled.button `
  width: 100%;
  height: 50px;
  margin: 10px auto 0;
  font-size: 20px;
  background-color: #29b2ef;
  border: 0;
  border-radius: 5px;
  color: #fff;
  line-height: 50px;
  text-align: center;
`

const Joinbtn = styled.div `
  width: 100%;
  height: 50px;
  margin: 10px auto 0;
  font-size: 20px;
  background-color: #e8e8e8;
  border-radius: 5px;
  color: #000;
  line-height: 50px;
  text-align: center;
`


const Login = () => {

  let history = useHistory();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (e) => {
    setEmail(e.target.value)
  }
  const onPasswordHandler = (e) => {
    setPassword(e.target.value)
  }

  return (
    <Loginform>
      <Userinput type="email" placeholder='UserEmail' value={Email} onChange={onEmailHandler} />
      <Userinput type="password" placeholder='Password' value={Password} onChange={onPasswordHandler} />
      <Checkbox type="checkbox" id="checkbox"/><label htmlFor="checkbox">로그인 유지</label>
      <Loginbtn type="submit" onClick={(e)=>{
        e.preventDefault();
        fetch('http://localhost:3001/login', {
          method: "post",
          credentials: 'include',
          headers: {
          "Content-Type": "application/json",
          },
          body : JSON.stringify({
            email : Email,
            password : Password,
          })
        }).then((res)=>
          res.json(),
        ).then((res)=>{
          if(res.success === 0){
            history.push("/MainPage");
          } else if(res.success === 1){
            alert("비밀번호가 일치하지 않습니다.")
          } else if(res.success === 2){
            alert("유효한 이메일이 아닙니다.")
          } else {
            alert("이메일 및 비밀번호를 입력하세요.")
          }
        })
      }}>로그인</Loginbtn>
      <Joinbtn><Link to="/RegisterPage" style={{ textDecoration: 'none', color: 'black', display:'block' }}>회원가입</Link></Joinbtn>
    </Loginform>
  )
}

export default Login