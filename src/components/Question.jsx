import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Questiontop = styled.div`
    display: flex;
    width : 1000px;
    height : 40px;
    border-bottom : 2px solid #999;
    line-height: 40px;
    text-align: center;
`
const QuestionElement = styled.div`
    width : 13%;
`
const QuestionContent = styled.div`
    width : 30%;
`
const QuestionTitle = styled.div`
    width : 40%;
`
const QuestionMain = styled.ul`
    width: 1000px;
    height: 370px;
    margin: 0;
    padding: 0;
`
const QuestionList = styled.li`
    display: flex;
    width : 1000px;
    height : 50px;
    border-bottom : 1px solid #999;
    line-height: 50px;
    text-align: center;
`

const Que = ({ que }) => {
    
    return (
        <Link to={`/QuestionView/${que.quesnum}`} style={{ textDecoration: 'none', color: 'black', display:'block' }}>
            <QuestionList>
                <QuestionElement>{que.quesnum}</QuestionElement>
                <QuestionElement>{que.sort}</QuestionElement>
                <QuestionTitle>{que.title.substr(0,10)}</QuestionTitle>
                <QuestionContent>{que.date.substr(0,10)}</QuestionContent>
                <QuestionContent>{que.writer}</QuestionContent>
                <QuestionElement>{que.views}</QuestionElement>
            </QuestionList>
        </Link>
    )
}

const Question = ({QueList, page, limit}) => {

    const offset = (page - 1) * limit;

    return (
        <div>
            <Questiontop>
                <QuestionElement>No</QuestionElement>
                <QuestionElement>분류</QuestionElement>
                <QuestionTitle>제목</QuestionTitle>
                <QuestionContent>날짜</QuestionContent>
                <QuestionContent>작성자</QuestionContent>
                <QuestionElement>조회수</QuestionElement>
            </Questiontop>
            <QuestionMain>
                {Array.from(QueList.slice(offset, offset + limit)).map(que => {
                    return (
                        <Que que={que} key={que.quesnum}/>
                    )
                })}
            </QuestionMain>
        </div>
    )
}

export default Question