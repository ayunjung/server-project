import React from 'react'
import styled from 'styled-components'
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-router-dom'

const LecFieldMain = styled.div `
    width: 400px;
    height: 50px;
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

const MainLecField = ({name}) => {

    return (
        <LecFieldMain>
            <Link to={`/LectureList/${name}`} style={{ textDecoration: 'none', color: 'white', display: 'block', margin: 'auto' }}>
                <LecFieldTitle>
                    <Linediv><AiOutlineMenu size="30" color="gray" /></Linediv>
                    <Textdiv>{name}</Textdiv>
                </LecFieldTitle>
            </Link>
        </LecFieldMain>
    )
}

export default MainLecField