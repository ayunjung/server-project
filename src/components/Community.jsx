import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Community = () => {

    const [community, setCommunity] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/readcommulist', {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                data: [
                    {
                        docnum: 1,
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
                    },
                    {
                        docnum: 3,
                        sort: "글",
                        title: "제목3",
                        date: "2022-03-30T11:55:22.000Z",
                        writer: "Test@naver.com",
                        views: 0,
                        content: "내용"
                    },
                    {
                        docnum: 4,
                        sort: "글",
                        title: "제목4",
                        date: "2022-03-30T11:55:23.000Z",
                        writer: "Test@naver.com",
                        views: 0,
                        content: "내용"
                    },
                    {
                        docnum: 5,
                        sort: "글",
                        title: "제목5",
                        date: "2022-03-30T11:55:24.000Z",
                        writer: "Test@naver.com",
                        views: 0,
                        content: "내용"
                    },
                    {
                        docnum: 6,
                        sort: "글",
                        title: "제목6",
                        date: "2022-03-30T11:55:24.000Z",
                        writer: "Test@naver.com",
                        views: 0,
                        content: "내용"
                    },
                    {
                        docnum: 7,
                        sort: "글",
                        title: "제목7",
                        date: "2022-03-30T11:55:25.000Z",
                        writer: "Test@naver.com",
                        views: 0,
                        content: "내용"
                    }
                ]
              }),
            }).then((res)=> {
                res.json()
            }
            ).then(data=>{console.log(data)})
    }, []);

    useEffect(() => {
        console.log(community)
    }, [community]);

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