import React from 'react'
import styled from 'styled-components'
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-router-dom'

const LecFieldMain = styled.div `
    width: 400px;
    height: 200px;
`
const LecFieldTitle = styled.div `
    width: 400px;
    height: 50px;
    line-height: 50px;
    background-color: #29b2ef;
    display: flex;
    margin-top: 50px;
`
const Linediv = styled.div`
    width : 50px;
    height : 100%;
    padding : 8px 0 0 8px;
`
const Textdiv = styled.div`
    width : 350px;
    height : 100%;
    padding-left: 10px;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
`
const LecFieldContents = styled.div `
    width: 400px;
    height: 100px;
    display: flex;
    flex-wrap: wrap;
    margin: 10px 0;
`
const LecDiv = styled.div `
    width: 100px;
    height: 120px;
    margin: 10px auto;
`
const Lecimage = styled.div `
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 18px;
    font-weight: 800;
    color: white;
`
const LName = styled.div `
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
`

const MainLecField = (props) => {

    return (
        <LecFieldMain>
            <LecFieldTitle>
                <Linediv><AiOutlineMenu size="30" color="gray" /></Linediv>
                <Textdiv>{props.name}</Textdiv>
            </LecFieldTitle>
            <LecFieldContents>
                <Link to="/LectureList" style={{ textDecoration: 'none', color: 'black', display: 'block', margin: 'auto' }}><LecDiv><Lecimage style = {{backgroundColor: props.color}}>{props.sub1}</Lecimage><LName>{props.sub1}</LName></LecDiv></Link>
                <Link to="/LectureList" style={{ textDecoration: 'none', color: 'black', display: 'block', margin: 'auto' }}><LecDiv><Lecimage style = {{backgroundColor: props.color}}>{props.sub2}</Lecimage><LName>{props.sub2}</LName></LecDiv></Link>
                <Link to="/LectureList" style={{ textDecoration: 'none', color: 'black', display: 'block', margin: 'auto' }}><LecDiv><Lecimage style = {{backgroundColor: props.color}}>{props.sub3}</Lecimage><LName>{props.sub3}</LName></LecDiv></Link>
            </LecFieldContents>
        </LecFieldMain>
    )
}

export default MainLecField