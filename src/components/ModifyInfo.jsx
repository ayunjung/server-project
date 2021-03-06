//https://react-icons.github.io/react-icons/#/
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { BsPersonFill } from "react-icons/bs"
import { GiQueenCrown } from "react-icons/gi"
import axios from 'axios'

const Maindiv = styled.div`
    display: flex;
    white-space: nowrap;
    width: 1000px;
    height: 540px;
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
    height: 70px;
    line-height: 70px;
`
const InputDiv = styled.input`
    width: 100%;
    height: 50px;
    line-height: 50px;
    margin: 5px;
    font-size: 20px;
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

const ModifyInfo = () => {

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

    // useEffect(() => {
    //     axios.post('http://localhost:3001/readmyinfo', {
    //         params: {
    //             email: Email,
    //         }
    //     }).then(res=>{setUserinfo(res.data.info)})
    // },[Email])

    useEffect(() => {
        fetch('http://localhost:3001/readmyinfo', {
            method: "post",
            credentials: 'include',
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: Email,
            })
        }).then((res)=>
            res.json(),
        ).then(data=>{setUserinfo(data.info)})
    },[Email])

    return (
        <div>
            <Maindiv>
                <User><BsPersonFill size="200" color="white" /></User>
                <Info>
                    <Basicinfo>????????? : {Userinfo.email}</Basicinfo>
                    <Basicinfo>???????????? : <InputDiv placeholder={Userinfo.birth}/></Basicinfo>
                    <Basicinfo>?????? : <InputDiv placeholder={Userinfo.job}/></Basicinfo>
                    <License>
                        <Licensetop>
                            <LicenseNum>No.</LicenseNum>
                            <LicenseElement>?????????</LicenseElement>
                            <LicenseElement>????????? ??????</LicenseElement>
                        </Licensetop>
                        <LicenseMain>
                            <LicenseList>
                                <LicenseNum>1</LicenseNum>
                                <LicenseElement>?????????</LicenseElement>
                                <LicenseElement>????????? ??????</LicenseElement>                               
                            </LicenseList>
                            <LicenseList>
                                <LicenseNum>2</LicenseNum>
                                <LicenseElement>?????????</LicenseElement>
                                <LicenseElement>????????? ??????</LicenseElement>                               
                            </LicenseList>
                            <LicenseList>
                                <LicenseNum>3</LicenseNum>
                                <LicenseElement>?????????</LicenseElement>
                                <LicenseElement>????????? ??????</LicenseElement>                               
                            </LicenseList>
                            <LicenseList>
                                <LicenseNum>4</LicenseNum>
                                <LicenseElement>?????????</LicenseElement>
                                <LicenseElement>????????? ??????</LicenseElement>                               
                            </LicenseList>
                            <LicenseList>
                                <LicenseNum>5</LicenseNum>
                                <LicenseElement>?????????</LicenseElement>
                                <LicenseElement>????????? ??????</LicenseElement>                               
                            </LicenseList>
                        </LicenseMain>
                    </License>
                    <Addinfo>
                        <ContentElement><div>????????????</div><GiQueenCrown size="35" style= {{ color: 'pink', marginLeft: '25px'}} /></ContentElement>
                        <ContentElement><div>????????? ??????</div><InputDiv placeholder={Userinfo.comment} /></ContentElement>
                    </Addinfo>
                </Info>
            </Maindiv>
            <Btndiv>
                <Infobtn onClick={()=>{ history.push("/MyPage") }}>??????</Infobtn>
                <Infobtn onClick={()=>{ history.goBack() }}>??????</Infobtn>
            </Btndiv>
        </div>
    )
}

export default ModifyInfo