import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  useEffect(()=>{
    fetch('http://localhost:3001/', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "Test@naver.com",
          password: "Test1234",
        }),
      }).then((res)=>
          res.json()
      ).then(data=>{console.log(data)})
  }, []);

  const onEmailHandler = (e) => {
    setEmail(e.target.value)
  }

  const onPasswordHandler = (e) => {
    setPassword(e.target.value)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <Loginform onSubmit={onSubmitHandler}>
      <Userinput type="email" value={Email} onChange={onEmailHandler} placeholder='UserEmail' />
      <Userinput type="password" value={Password} onChange={onPasswordHandler} placeholder='Password' />
      <Checkbox type="checkbox" id="checkbox"/><label for="checkbox">로그인 유지</label>
      <Loginbtn type="submit">로그인</Loginbtn>
      <Joinbtn><Link to="/RegisterPage" style={{ textDecoration: 'none', color: 'black', display:'block' }}>회원가입</Link></Joinbtn>
    </Loginform>
  )
}

export default Login