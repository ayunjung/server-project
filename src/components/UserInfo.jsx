//https://react-icons.github.io/react-icons/#/
import React from 'react'
import styled from 'styled-components'
import { BsPersonFill } from "react-icons/bs";

const UserInfo = () => {

    const Maindiv = styled.div`
        display: flex;
    `

    const User = styled.div`
        width: 300px;
        height: 600px;
        border: 1px solid #999;
        border-right: 0;
        box-sizing: border-box;
        background-color: #29b2ef;
        font-size: 100px;
        line-height: 600px;
        text-align: center;
    `

    const Info = styled.div`
        width: 700px;
        height: 600px;
        border: 1px solid #999;
        border-left: 0;
        box-sizing: border-box;
        padding: 30px;
        font-size: 20px;
    `

    const Btndiv = styled.div`
        display: flex;
        width: 700px;
        height: 600px;
        box-sizing: border-box;
        padding: 30px;
        font-size: 20px;
    `

    const Infobtn = styled.div`
        width: 150px;
        height: 40px;
        border: 1px solid #29b2ef;
        border-radius: 5px;
        box-sizing: border-box;
        margin-right: 30px;
        background-color: #29b2ef;
        color: #fff;
        line-height: 40px;
        text-align: center;
    `

    return (
        <div>
            <Maindiv>
                <User><BsPersonFill size="200" color="white" /></User>
                <Info>
                    <div>이름 : 정아윤</div>
                    <div>나이 : 23</div>
                </Info>
            </Maindiv>
            <Btndiv>
                <Infobtn>회원정보수정</Infobtn>
                <Infobtn>로그아웃</Infobtn>
            </Btndiv>
        </div>
    )
}

export default UserInfo