import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


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
        width : 35%;
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
    
    const [CommuList, setCommuList] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:3001/readcommulist'
        ).then((res)=>
            res.json()
        ).then(res=>CommuList(res.data)
        ).then(data=>{console.log(data)})
    }, []);

    return (
        <div>
            <Communitytop>
                <CommunityElement>No</CommunityElement>
                <CommunityElement>분류</CommunityElement>
                <CommunityContent>제목</CommunityContent>
                <CommunityElement>날짜</CommunityElement>
                <CommunityElement>작성자</CommunityElement>
                <CommunityElement>조회수</CommunityElement>
            </Communitytop>
            <CommunityMain>
                <Link to="/CommunityView" style={{ textDecoration: 'none', color: 'black', display:'block' }}>
                    {CommuList.map((commu) => {
                        <CommunityList>
                            <CommunityElement>{commu.docnum}</CommunityElement>
                            <CommunityElement>{commu.sort}</CommunityElement>
                            <CommunityContent>{commu.title}</CommunityContent>
                            <CommunityElement>{commu.date}</CommunityElement>
                            <CommunityContent>{commu.writer}</CommunityContent>
                            <CommunityElement>{commu.views}</CommunityElement>
                        </CommunityList>
                    })}
                </Link>
            </CommunityMain>
        </div>
    )
}

export default Community