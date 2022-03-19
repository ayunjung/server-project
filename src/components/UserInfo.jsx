//https://react-icons.github.io/react-icons/#/
import React from 'react'
import styled from 'styled-components'
import { BsPersonFill } from "react-icons/bs";
import { GiQueenCrown } from "react-icons/gi";

const UserInfo = () => {

    const Maindiv = styled.div`
        display: flex;
        white-space: nowrap;
    `

    const User = styled.div`
        width: 200px;
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
        width: 800px;
        height: 600px;
        border: 1px solid #999;
        border-left: 0;
        box-sizing: border-box;
        padding: 25px 50px;
        font-size: 20px;
    `
    const Contents = styled.div`
        display: flex;
        width: 100%;
        height: 70px;
        line-height: 70px;
    `
    const License = styled.div`
        width: 600px;
        height: 180px;
        border: 1px solid #999;
    `
    const Licensetop = styled.div`
        display: flex;
        overflow: auto;
        width: 100%;
        height: 30px;
        border-bottom: 2px solid #999;
    `
    const LicenseNum = styled.div`
        width: 20%;
        text-align: center;
    `
    const LicenseElement = styled.div`
        width: 40%;
        text-align: center;
    `
    const LicenseMain = styled.ul`
        width: 600px;
        height: 150px; 
        padding: 0;
        margin: 0;
        overflow: auto;
    `
    const LicenseList = styled.li`
        display: flex;
        height : 40px;
        border-bottom : 1px solid #999;
        line-height: 40px;
        text-align: center;
    `
    const ContentElement = styled.div`
        width: 50%;
    `
    const Btndiv = styled.div`
        display: flex;
        padding: 30px;
        font-size: 20px;
    `
    const Infobtn = styled.div`
        width: 150px;
        height: 40px;
        border-radius: 5px;
        margin: 0 50px;
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
                    <Contents>이름 : 정아윤</Contents>
                    <Contents>나이 : 23</Contents>
                    <Contents>직업 : 대학생</Contents>
                    <License>
                        <Licensetop>
                            <LicenseNum>No.</LicenseNum>
                            <LicenseElement>자격증</LicenseElement>
                            <LicenseElement>수강한 강의</LicenseElement>
                        </Licensetop>
                        <LicenseMain>
                            <LicenseList>
                                <LicenseNum>1</LicenseNum>
                                <LicenseElement>자격증</LicenseElement>
                                <LicenseElement>수강한 강의</LicenseElement>                               
                            </LicenseList>
                            <LicenseList>
                                <LicenseNum>2</LicenseNum>
                                <LicenseElement>자격증</LicenseElement>
                                <LicenseElement>수강한 강의</LicenseElement>                               
                            </LicenseList>
                            <LicenseList>
                                <LicenseNum>3</LicenseNum>
                                <LicenseElement>자격증</LicenseElement>
                                <LicenseElement>수강한 강의</LicenseElement>                               
                            </LicenseList>
                            <LicenseList>
                                <LicenseNum>4</LicenseNum>
                                <LicenseElement>자격증</LicenseElement>
                                <LicenseElement>수강한 강의</LicenseElement>                               
                            </LicenseList>
                            <LicenseList>
                                <LicenseNum>5</LicenseNum>
                                <LicenseElement>자격증</LicenseElement>
                                <LicenseElement>수강한 강의</LicenseElement>                               
                            </LicenseList>
                        </LicenseMain>
                    </License>
                    <Contents>
                        <ContentElement>회원등급</ContentElement>
                        <ContentElement>간단한 소개</ContentElement>
                    </Contents>
                    <Contents>
                        <ContentElement><a src="">작성한 글 보기</a></ContentElement>
                        <ContentElement><a src="">수강한 강좌 보기</a></ContentElement>
                    </Contents>
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