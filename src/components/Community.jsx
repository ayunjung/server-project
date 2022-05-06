import React, {useState,useEffect} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Communitytop = styled.div`
    display: flex;
    width : 1000px;
    height : 40px;
    border-bottom : 2px solid #999;
    line-height: 40px;
    text-align: center;
`
const CommunityElement = styled.div`
    width : 13%;
`
const CommunityContent = styled.div`
    width : 30%;
`
const CommunityTitle = styled.div`
    width : 40%;
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

const Commu = ({ commu }) => {
    return (
        <Link to="/CommunityView" style={{ textDecoration: 'none', color: 'black', display:'block' }}>
            <CommunityList>
                <CommunityElement>{commu.docnum}</CommunityElement>
                <CommunityElement>{commu.sort}</CommunityElement>
                <CommunityTitle>{commu.title.substr(0,10)}</CommunityTitle>
                <CommunityContent>{commu.date.substr(0,10)}</CommunityContent>
                <CommunityContent>{commu.writer}</CommunityContent>
                <CommunityElement>{commu.views}</CommunityElement>
            </CommunityList>
        </Link>
    )
}


const Community = () => {

    const [CommuList, setCommuList] = useState([]);

    useEffect(()=>{
        let isMounted = true;//eslint-disable-line no-unused-vars
        fetch('http://localhost:3001/readcommulist', {
            method: "post",
            headers: {
            "Content-Type": "application/json",
            },
        }).then((res)=>
            res.json(),
        ).then(data=>{setCommuList(data.data)})
        return () => {
            isMounted = false;
        }
    },[])

    return (
        <div>
            <Communitytop>
                <CommunityElement>No</CommunityElement>
                <CommunityElement>분류</CommunityElement>
                <CommunityTitle>제목</CommunityTitle>
                <CommunityContent>날짜</CommunityContent>
                <CommunityContent>작성자</CommunityContent>
                <CommunityElement>조회수</CommunityElement>
            </Communitytop>
            <CommunityMain>
                {Array.from(CommuList).map(commu => {
                    return (
                        <Commu commu={commu} key={commu.docnum}/>
                    )
                })}
            </CommunityMain>
        </div>
    )
}

export default Community