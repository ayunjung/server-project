import React from 'react'
import styled from 'styled-components'
import Topbar from '../components/Topbar'
import Searchbar from '../components/Searchbar'
import Question from '../components/Question'
import Pagebar from '../components/Pagebar'
import { Link } from 'react-router-dom'

function QuestionPage() {

    const Top = styled.div`
        width: 1200px;
        margin: 30px auto;
    `
    const QuestionMain = styled.div`
        width: 1000px;
        margin: 0 auto;
    `    
    const QuestionHead = styled.div`
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
    `
    const WriteBtn = styled.div`
        width: 100px;
        height: 40px;
        background-color: #888;
        font-weight: 800;
        border-radius: 5px;
        line-height: 40px;
        text-align: center;
    `
    const QuestionList = styled.div`
        margin: 20px 0 0;
        height: 400px;
    `

    return (
        <div>
            <Top><Topbar /></Top>
            <QuestionMain>
                <QuestionHead>
                    <h1>Q{'&'}A</h1>
                    <WriteBtn><Link to="/QuestionWrite" style={{ textDecoration: 'none', color: 'black', display:'block' }}>글쓰기</Link></WriteBtn>
                </QuestionHead>
                <Searchbar />
                <QuestionList><Question /></QuestionList>
                <Pagebar />
            </QuestionMain>
        </div>
    );
}

export default QuestionPage