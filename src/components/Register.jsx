import React, { useState, useCallback }  from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const Joinform = styled.form `
  width: 400px;
  font-size: 18px;
`

const Joininput = styled.input `
  margin: 5px 0;
  width: 100%;
  height: 30px;
  border: 1px solid #999;
  border-radius: 5px;
  font-size: 20px;
`
const ErrorMsg = styled.div`
  font-size: 15px;
  &.success {
    color: #8f8c8b;
  }
  &.error {
    color: #FF0000;
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

const Register = () => {

  let history = useHistory();

  //이메일, 비밀번호, 비밀번호 확인, 생년월일, 직업, 한줄소개
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [PasswordConfirm, setPasswordConfirm] = useState("");
  const [Birth, setBirth] = useState("");
  const [Job, setJob] = useState("");
  const [Comment, setComment] = useState("");

  //오류메시지 상태저장
  const [EmailMessage, setEmailMessage] = useState('')
  const [PasswordMessage, setPasswordMessage] = useState('')
  const [PasswordConfirmMessage, setPasswordConfirmMessage] = useState('')

  // 유효성 검사
  const [isEmail, setIsEmail] = useState(false)
  const [isPassword, setIsPassword] = useState(false)
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false)

  const onBirthHandler = (e) => {
    setBirth(e.target.value)
  }
  const onJobHandler = (e) => {
    setJob(e.target.value)
  }
  const onCommentHandler = (e) => {
    setComment(e.target.value)
  }


  // 이메일
  const onChangeEmail = useCallback((e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    const emailCurrent = e.target.value
    setEmail(emailCurrent)

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage('이메일 형식이 틀렸습니다.')
      setIsEmail(false)
    } else {
      setEmailMessage('올바른 이메일 형식입니다.')
      setIsEmail(true)
    }
  }, [])

  // 비밀번호
  const onChangePassword = useCallback((e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
    const passwordCurrent = e.target.value
    setPassword(passwordCurrent)

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력하십시오.')
      setIsPassword(false)
    } else {
      setPasswordMessage('안전한 비밀번호입니다.')
      setIsPassword(true)
    }
  }, [])

  // 비밀번호 확인
  const onChangePasswordConfirm = useCallback((e) => {
      const passwordConfirmCurrent = e.target.value
      setPasswordConfirm(passwordConfirmCurrent)

      if (Password === passwordConfirmCurrent) {
        setPasswordConfirmMessage('비밀번호를 똑같이 입력했습니다.')
        setIsPasswordConfirm(true)
      } else {
        setPasswordConfirmMessage('비밀번호가 일치하지 않습니다.')
        setIsPasswordConfirm(false)
      }
    },
    [Password]
  )


  return (
    <Joinform>
      <label>이메일</label><Joininput type="email" value={Email} onChange={onChangeEmail} />
      {Email.length > 0 && <ErrorMsg className={`message ${isEmail ? 'success' : 'error'}`}>{EmailMessage}</ErrorMsg>}
      <label>비밀번호</label><Joininput type="password" value={Password} onChange={onChangePassword} />
      {Password.length > 0 && <ErrorMsg className={`message ${isPassword ? 'success' : 'error'}`}>{PasswordMessage}</ErrorMsg>}
      <label>비밀번호 확인</label><Joininput type='password' value={PasswordConfirm} onChange={onChangePasswordConfirm} />
      {PasswordConfirm.length > 0 && <ErrorMsg className={`message ${isPasswordConfirm ? 'success' : 'error'}`}>{PasswordConfirmMessage}</ErrorMsg>}
      <label>생년월일</label><Joininput  type='date' value={Birth} onChange={onBirthHandler}/>
      <label>직업</label><Joininput  type='text' value={Job} onChange={onJobHandler}/>
      <label>한줄소개</label><Joininput  type='text' value={Comment} onChange={onCommentHandler}/>
      <Btnbox>
        <Joinbtn type="submit" onClick={(e)=>{
          e.preventDefault();
          fetch('http://localhost:3001/join', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: Email,
              password : Password,
              birth: Birth,
              job: Job,
              comment: Comment,
            }),
          }).then((res)=>
              res.json()
          ).then(data=>{console.log(data)})
        }}>회원가입</Joinbtn>
        <Cancelbtn onClick={()=>{ history.goBack() }}>취소</Cancelbtn>
      </Btnbox>
    </Joinform>
  )
}

export default Register