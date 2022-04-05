import React from 'react'
import styled from 'styled-components';
import { BsPersonFill } from "react-icons/bs";

const Loginicon = () => {

    const UserIcondiv = styled.div`
        width: 60px;
        height: 60px;
        padding: 5px;
        border: 1px solid black;
        border-radius: 50%;
        background-color: gray;
    `

  return (
    <div>
      <UserIcondiv>
        <BsPersonFill size="60" color="white" />
      </UserIcondiv>
      <div style= {{ fontSize: '15px', fontWeight: '800', marginTop: '5px'}}>로그인/회원가입</div>
    </div>
  )
}

export default Loginicon