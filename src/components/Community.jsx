import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// const [Docnum, setDocnum] = useState("");
// const [Sort, setSort] = useState("");
// const [Title, setTitle] = useState("");
// const [Date, setDate] = useState("");
// const [Writer, setWriter] = useState("");
// const [Views, setViews] = useState("");
// const [Content, setContent] = useState("");

// useEffect(()=>{
//     fetch('http://localhost:3001/readcommulist', {
//         method: "POST",
//         headers: {
//         "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             docnum: Docnum,
//             sort: Sort,
//             title: Title,
//             date: Date,
//             writer: Writer,
//             views: Views,
//             content: Content
//         }),
//     }).then((res)=>
//         res.json()
//     ).then(data=>{console.log(data)})
// }, []);

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
                <Link to="/CommunityView" style={{ textDecoration: 'none', color: 'black', display:'block' }}>
                    <CommunityList>
                        <CommunityElement>1</CommunityElement>
                        <CommunityElement>웹개발</CommunityElement>
                        <CommunityContent>자바스크립트 질문</CommunityContent>
                        <CommunityElement>정아윤</CommunityElement>
                    </CommunityList>
                </Link>
            </CommunityMain>
        </div>
    )
}

export default Community