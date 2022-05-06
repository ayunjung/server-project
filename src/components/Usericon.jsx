import React from 'react'
import styled from 'styled-components';
import { BsPersonFill } from "react-icons/bs";
import { Link } from 'react-router-dom'

const Usericon = () => {

  if (window.location.pathname === '/') return null;
  if (window.location.pathname === '/LoginPage') return null;
  if (window.location.pathname === '/JoinPage') return null;

  const UserIcondiv = styled.div`
    width: 60px;
    height: 60px;
    padding: 5px;
    border: 1px solid black;
    border-radius: 50%;
    background-color: gray;
  `

  return (
    <Link to="/MyPage" style={{ textDecoration: 'none', color: 'black' }}>
      <UserIcondiv>
        <BsPersonFill size="60" color="white" />
      </UserIcondiv>
      <div style= {{ fontSize: '15px', fontWeight: '800', marginTop: '5px'}}>마이페이지</div>
    </Link>
  )
}

export default Usericon