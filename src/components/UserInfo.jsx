//https://react-icons.github.io/react-icons/#/
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import { BsPersonFill } from "react-icons/bs";
import { GiQueenCrown } from "react-icons/gi";
import axios from 'axios';

const Userdiv = styled.div`
    width: 1000px;
    margin: 0 auto;
`
const Maindiv = styled.div`
    width: 100%;
    height: 540px;
    display: flex;
    white-space: nowrap;
`

const User = styled.div`
    width: 20%;
    height: 100%;
    border: 1px solid #999;
    border-right: 0;
    box-sizing: border-box;
    background-color: #29b2ef;
    font-size: 100px;
    line-height: 600px;
    text-align: center;
`

const Info = styled.div`
    width: 80%;
    height: 100%;
    border: 1px solid #999;
    border-left: 0;
    box-sizing: border-box;
    padding: 10px 50px;
    font-size: 20px;
`
const Basicinfo = styled.div`
    display: flex;
    width: 100%;
    height: 10%;
    line-height: 70px;
    margin: 5px 0;
`
const Addinfo = styled.div`
    display: flex;
    width: 100%;
    height: 15%;
    line-height: 70px;
`
const License = styled.div`
    width: 600px;
    height: 180px;
    border: 1px solid #999;
    margin: 20px 0 10px;
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
    width: 40%;
    height: 30px;
    line-height: 30px;
    margin: 10px 0;
`
const Btndiv = styled.div`
    display: flex;
    padding: 15px;
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
const LogoutBtn = styled.button`
    width: 150px;
    height: 40px;
    border: 0;
    border-radius: 5px;
    margin: 0 50px;
    background-color: #29b2ef;
    color: #fff;
    line-height: 40px;
    text-align: center;
    font-size: 20px;
`

const UserInfo = () => {

    let history = useHistory();

    const [Email, setEmail] = useState("");
    const [Userinfo, setUserinfo] = useState({});

    axios.defaults.withCredentials = true

    axios.post('http://localhost:3001/login', {
        withCredentials: true
      })
      .then(response => {
        setEmail(response.data.session.sid);
    })

    useEffect(() => {
        axios.post('http://localhost:3001/readmyinfo', {
            params: {
                email: Email,
            }
        }).then(res=>{setUserinfo(res.data.info)})
    },[Email])
    
    return (
        <Userdiv>
            <Maindiv>
                <User><BsPersonFill size="200" color="white" /></User>
                <Info>
                    <Basicinfo>이메일 : {Userinfo.email}</Basicinfo>
                    <Basicinfo>생년월일 : {Userinfo.birth}</Basicinfo>
                    <Basicinfo>직업 : {Userinfo.job}</Basicinfo>
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
                    <Addinfo>
                        <ContentElement><div>회원등급</div><GiQueenCrown size="35" style= {{ color: 'pink', marginLeft: '25px'}} /></ContentElement>
                        <ContentElement><div>간단한 소개</div><div style= {{ color: 'gray', fontSize: '20px' }}>{Userinfo.comment}</div></ContentElement>
                    </Addinfo>
                    <Addinfo>
                        <ContentElement>작성한 글 보기</ContentElement>
                        <ContentElement><Link to="/LectureView">수강한 강좌 보기</Link></ContentElement>
                    </Addinfo>
                </Info>
            </Maindiv>
            <Btndiv>
                <Infobtn><Link to="/ModifyInfoPage" style={{ textDecoration: 'none', color: 'white', display:'block' }}>회원정보수정</Link></Infobtn>
                <LogoutBtn onClick={()=>{
                    fetch('http://localhost:3001/logout', {
                    method: "post",
                    credentials: 'include',
                    headers: {
                    "Content-Type": "application/json",
                    },
                    body : JSON.stringify({
                    })
                }).then((res)=>
                    res.json(),
                ).then(()=>{history.push("/LoginPage")})}}>로그아웃</LogoutBtn>
            </Btndiv>
        </Userdiv>
    )
}

export default UserInfo