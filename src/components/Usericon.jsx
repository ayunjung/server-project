import React, { useState } from 'react'
import styled from 'styled-components';
import { BsPersonFill } from "react-icons/bs";
import { Link } from 'react-router-dom'
import axios from 'axios';

const UserIcondiv = styled.div`
  width: 60px;
  height: 60px;
  padding: 5px;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 50%;
  background-color: gray;
`

const UserGreeting = () => {
  return(
    <Link to="/MyPage" style={{ textDecoration: 'none', color: 'black' }}>
      <UserIcondiv>
        <BsPersonFill size="60" color="white" />
      </UserIcondiv>
      <div style= {{ fontSize: '15px', fontWeight: '800', marginTop: '5px'}}>마이페이지</div>
    </Link>
  )
}

const GuestGreeting = () => {
  return(
    <Link to="/LoginPage" style={{ textDecoration: 'none', color: 'black' }}>
      <div style= {{ width: '100px' }}>
        <UserIcondiv>
          <BsPersonFill size="60" color="white" />
        </UserIcondiv>
      </div>
      <div style= {{ fontSize: '15px', fontWeight: '800', marginTop: '5px', textAlign: 'center' }}>로그인/회원가입</div>
    </Link>
  )
}

const Usericon = () => {

  const [LoginCookie,setLoginCookie] = useState("");

  if (window.location.pathname === '/') return null;
  if (window.location.pathname === '/LoginPage') return null;
  if (window.location.pathname === '/JoinPage') return null;

  axios.defaults.withCredentials = true;

  axios.post('http://localhost:3001/login', {
      // withCredentials: true
    })
    .then(response => {
    setLoginCookie(response.data.session.logined);
  })

  const LoginState = () => {
    if (LoginCookie === true) {
      return (<UserGreeting />)
    } else {
      return (<GuestGreeting />)
    }
  }

  return (
    <LoginState />
  )
}

export default Usericon