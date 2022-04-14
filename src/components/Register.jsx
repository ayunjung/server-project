import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Register = () => {

    const Joinform = styled.form `
      width: 400px;
      font-size: 18px;
    `

    const Joininput = styled.input `
      margin: 5px 0 15px;
      width: 100%;
      height: 30px;
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
      height: 40px;
      margin: 10px 5px 0;
      font-size: 20px;
      background-color: #29b2ef;
      border: 0;
      border-radius: 5px;
      color: #fff;
      line-height: 40px;
      text-align: center;
    `

    const Cancelbtn = styled.div `
      width: 200px;
      height: 40px;
      margin: 10px 5px 0;
      font-size: 20px;
      background-color: #e8e8e8;
      border-radius: 5px;
      line-height: 40px;
      text-align: center;
    `

    return (
      <Joinform>
        <label>이메일</label><Joininput type="email"/>
        <label>비밀번호</label><Joininput type="password"/>
        <label>비밀번호 확인</label><Joininput type='password'/>
        <label>생년월일</label><Joininput  type='date'/>
        <label>직업</label><Joininput  type='text'/>
        <label>한줄소개</label><Joininput  type='text'/>
        <Btnbox>
          <Joinbtn type="submit" onClick={(e)=>{
            e.preventDefault();
            fetch('http://localhost:3001/join', {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: "Test@naver.com",
                password: "Test1234",
                birth: "Test-te-st",
                job: "Testman",
                comment: "Testing...",
                profilepic: "Testpic",
              }),
            }).then((res)=>
                res.json()
            ).then(data=>{console.log(data)})
          }}>회원가입</Joinbtn>
          <Cancelbtn><Link to="/LoginPage" style={{ textDecoration: 'none', color: 'black', display:'block' }}>취소</Link></Cancelbtn>
        </Btnbox>
      </Joinform>
    )
}

export default Register