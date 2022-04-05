import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Register = () => {

    const Joinform = styled.form `
      width: 400px;
      font-size: 20px;
    `

    const Joininput = styled.input `
      margin: 5px 0 15px;
      width: 100%;
      height: 50px;
      border: 1px solid #999;
      border-radius: 5px;
      font-size: 20px;
    `

    const Btnbox = styled.div `
      display: flex;
      margin: 0 auto;
    `

    const Joinbtn = styled.button `
      width: 200px;
      height: 50px;
      margin: 10px 5px 0;
      font-size: 20px;
      background-color: #29b2ef;
      border: 3px solid #29b2ef;
      border-radius: 5px;
      color: #fff;
      line-height: 50px;
      text-align: center;
    `

    const Cancelbtn = styled.div `
      width: 200px;
      height: 50px;
      margin: 10px 5px 0;
      font-size: 20px;
      background-color: #e8e8e8;
      border-radius: 5px;
      line-height: 50px;
      text-align: center;
    `

    return (
      <Joinform>
        <label>이메일</label><Joininput />
        <label>이메일확인</label><Joininput />
        <label>비밀번호</label><Joininput type='password'/>
        <label>이름</label><Joininput />
        <Btnbox>
            <Joinbtn type="submit">회원가입</Joinbtn>
            <Cancelbtn><Link to="/LoginPage" style={{ textDecoration: 'none', color: 'black', display:'block' }}>취소</Link></Cancelbtn>
        </Btnbox>
      </Joinform>
    )
}

export default Register