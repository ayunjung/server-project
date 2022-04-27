import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Question = () => {

    const Questiontop = styled.div`
        display: flex;
        width : 1000px;
        height : 40px;
        border-bottom : 2px solid #999;
        line-height: 40px;
        text-align: center;
    `
    const QuestionElement = styled.div`
        width : 15%;
    `
    const QuestionContent = styled.div`
        width : 35%;
    `
    const QuestionMain = styled.ul`
        width: 1000px;
        height: 370px;
        margin: 0;
        padding: 0;
        overflow: auto;
    `
    const QuestionList = styled.li`
        display: flex;
        width : 1000px;
        height : 50px;
        border-bottom : 1px solid #999;
        line-height: 50px;
        text-align: center;
    `

    return (
        <div>
            <Questiontop>
                <QuestionElement>No</QuestionElement>
                <QuestionElement>분류</QuestionElement>
                <QuestionContent>제목</QuestionContent>
                <QuestionElement>날짜</QuestionElement>
                <QuestionElement>작성자</QuestionElement>
                <QuestionElement>조회수</QuestionElement>
            </Questiontop>
            <QuestionMain>
                <Link to="/QuestionView" style={{ textDecoration: 'none', color: 'black', display:'block' }}>
                    <QuestionList>
                        <QuestionElement>1</QuestionElement>
                        <QuestionElement>해결</QuestionElement>
                        <QuestionContent>자바스크립트 질문</QuestionContent>
                        <QuestionElement>2021.11.14</QuestionElement>
                        <QuestionElement>정아윤</QuestionElement>
                        <QuestionElement>0</QuestionElement>
                    </QuestionList>
                </Link>
            </QuestionMain>
        </div>
    )
}

export default Question