import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { createStore } from 'redux'

function reducer(currentState, action){
    if(currentState === undefined){
        return {
            contents: [
                {   docnum: 1,
                    sort: "글",
                    title: "제목",
                    date: "2022-03-30T11:55:12.000Z",
                    writer: "Test@naver.com",
                    views: 0,
                    content: "내용"
                },
                {
                    docnum: 2,
                    sort: "글",
                    title: "제목2",
                    date: "2022-03-30T11:55:20.000Z",
                    writer: "Test@naver.com",
                    views: 0,
                    content: "내용"
                }
            ]
        };
    }
    var newState = {...currentState};
    return newState;
}
var store = createStore(reducer);

const Community = () => {

    const Communitytop = styled.div`
        display: flex;
        width : 1000px;
        height : 40px;
        border-bottom : 2px solid #999;
        line-height: 40px;
        text-align: center;
    `
    const CommunityElement = styled.div`
        width : 15%;
    `
    const CommunityContent = styled.div`
        width : 55%;
    `
    const CommunityMain = styled.ul`
        width: 1000px;
        height: 370px;
        margin: 0;
        padding: 0;
        overflow: auto;
    `
    const CommunityList = styled.li`
        display: flex;
        width : 1000px;
        height : 50px;
        border-bottom : 1px solid #999;
        line-height: 50px;
        text-align: center;
    `

    return (
        <div>
            <Communitytop>
                <CommunityElement>No</CommunityElement>
                <CommunityElement>분류</CommunityElement>
                <CommunityContent>제목</CommunityContent>
                <CommunityElement>작성자</CommunityElement>
            </Communitytop>
            <CommunityMain>
                <Link to="/PostPage" style={{ textDecoration: 'none', color: 'black', display:'block' }}>
                    <CommunityList>
                        <CommunityElement>1</CommunityElement>
                        <CommunityElement>미해결</CommunityElement>
                        <CommunityContent>자바스크립트 질문</CommunityContent>
                        <CommunityElement>정아윤</CommunityElement>
                    </CommunityList>
                </Link>
            </CommunityMain>
        </div>
    )
}

export default Community