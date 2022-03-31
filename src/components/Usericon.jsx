import React from 'react'
import styled from 'styled-components';
import { BsPersonFill } from "react-icons/bs";

const Usericon = () => {

    const UserIcondiv = styled.div`
        width: 70px;
        height: 70px;
        padding: 5px;
        border: 1px solid black;
        border-radius: 50%;
        background-color: gray;
        margin: 0 auto;
    `

  return (
    <UserIcondiv>
        <BsPersonFill size="70" color="white" />
    </UserIcondiv>
  )
}

export default Usericon