import React from 'react'
import styled from 'styled-components'
import Topbar from '../components/Topbar'
import Searchbar from '../components/Searchbar'
import Community from '../components/Community'
import Pagebar from '../components/Pagebar'
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

function CommunityPage() {

    const Top = styled.div`
        width: 1200px;
        margin: 30px auto;
    `
    const CommunityMain = styled.div`
        width: 1000px;
        margin: 0 auto;
    `    
    const CommunityHead = styled.div`
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
    const CommunityList = styled.div`
        margin: 20px 0 0;
        height: 400px;
    `

    return (
        <div>
            <Top><Topbar /></Top>
            <CommunityMain>
                <CommunityHead>
                    <h1>커뮤니티</h1>
                    <WriteBtn><Link to="/WritePage" style={{ textDecoration: 'none', color: 'black', display:'block' }}>글쓰기</Link></WriteBtn>
                </CommunityHead>
                <Searchbar />
                <CommunityList><Community /></CommunityList>
                <Pagebar />
            </CommunityMain>
        </div>
    );
}

export default CommunityPage