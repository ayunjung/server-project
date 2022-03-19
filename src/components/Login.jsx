import React from 'react'
import styled from 'styled-components'

const Login = () => {

    const Loginform = styled.div `
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
    `

    const Checkbox = styled.input `
      margin: 2px;
    `

    const Loginbtn = styled.div `
      width: 100%;
      height: 50px;
      margin-top: 10px;
      font-size: 20px;
      background-color: #29b2ef;
      border: 3px solid #29b2ef;
      border-radius: 5px;
      color: #fff;
      line-height: 50px;
      text-align: center;
    `

    const Joinbtn = styled.div `
      width: 100%;
      height: 50px;
      margin-top: 10px;
      font-size: 20px;
      background-color: #e8e8e8;
      border: 3px solid #e8e8e8;
      border-radius: 5px;
      color: #000;
      line-height: 50px;
      text-align: center;
    `

    return (
      <Loginform>
        <Userinput placeholder='Username' />
        <Userinput placeholder='Password' />
        <Checkbox type="checkbox" id="checkbox"/><label for="checkbox">로그인 유지</label>
        <Loginbtn>로그인</Loginbtn>
        <Joinbtn>회원가입</Joinbtn>
      </Loginform>
    )
}

export default Login