import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const Modal = styled.div `
    width: 400px;
    height: 200px;
    background-color: #e8e8e8;
    border-radius: 5px;
    font-size: 20px;
    line-height: 100px;
    text-align: center;
    margin: 180px auto;
`
const Goback = styled.div `
    height: 40px;
    font-size: 20px;
    color: gray;
    line-height: 40px;
    text-align: right;
    padding-right: 15px;
`
const Text = styled.div `
    height: 80px;
    font-size: 20px;
    line-height: 80px;
    text-align: center;
`

const Loginbtn = styled.div `
    width: 80%;
    height: 50px;
    margin: 10px auto;
    font-size: 20px;
    background-color: #29b2ef;
    border: 3px solid #29b2ef;
    border-radius: 5px;
    color: #fff;
    line-height: 50px;
    text-align: center;
`

const LoginPopup = () => {

    let history = useHistory();

    return (
        <Modal>
            <Goback onClick={()=>{ history.goBack() }}>X</Goback>
            <Text>로그인이 필요합니다.</Text>
            <Loginbtn onClick={()=>{ history.push("/LoginPage") }}>로그인</Loginbtn>
        </Modal>
    )
}

export default LoginPopup
