import React, {useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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

const Loginbtn = styled.button `
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


const Login = () => {

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const onEmailHandler = (e) => {
      setEmail(e.target.value);
    }
    

    const onPasswordHandler = (e) => {
      setPassword(e.target.value);
    }

    const onSubmitHandler = (e) => {
      e.preventDefault();
    }



    return (
      <Loginform onSubmit={onSubmitHandler}>
        <Userinput type="email" value={Email} onChange={onEmailHandler} placeholder='UserEmail' />
        <Userinput type="password" value={Password} onChange={onPasswordHandler} placeholder='Password' />
        <Checkbox type="checkbox" id="checkbox"/><label for="checkbox">로그인 유지</label>
        <Loginbtn type="submit" onClick={()=>{
          const fetchf = () =>{
            fetch('http://localhost:3001/join', {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                quesnum : 1,
              }),
            }).then((res)=>
                res.json()
            ).then(data=>{console.log(data)})
          }
        }}>로그인</Loginbtn>
        <Joinbtn><Link to="/RegisterPage" style={{ textDecoration: 'none', color: 'black', display:'block' }}>회원가입</Link></Joinbtn>
      </Loginform>
    )
}

export default Login