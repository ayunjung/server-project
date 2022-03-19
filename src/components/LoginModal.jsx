import React from 'react'
import styled from 'styled-components'

const LoginModal = () => {

    const Modal = styled.div `
        width: 400px;
        height: 200px;
        background-color: #e8e8e8;
        border-radius: 5px;
        font-size: 20px;
        line-height: 100px;
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

    return (
        <Modal>
            <div>로그인이 필요합니다.</div>
            <Loginbtn>로그인</Loginbtn>
        </Modal>
    )
}

export default LoginModal
