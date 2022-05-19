import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import Topbar from '../components/Topbar'
import Searchbar from '../components/Searchbar'
import Community from '../components/Community'
import Pagebar from '../components/Pagebar'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

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

function CommunityPage() {
    let history = useHistory();

    const [CommuList, setCommuList] = useState([]);
    const [page, setPage] = useState(1);
    const [LoginState,setLoginState] = useState("");

    axios.defaults.withCredentials = true;

    axios.post('http://localhost:3001/login', {
        }).then(response => {
            setLoginState(response.data.session.logined)
    })

    useEffect(()=>{
        fetch('http://localhost:3001/readcommulist', {
            method: "post",
            headers: {
            "Content-Type": "application/json",
            },
        }).then((res)=>
            res.json(),
        ).then(data=>{setCommuList(data.data)})
    },[])


    return (
        <div>
            <Topbar />
            <CommunityMain>
                <CommunityHead>
                    <h1>커뮤니티</h1>
                    <WriteBtn onClick={()=>{
                        if(LoginState === 'true') {
                            history.push("/CommunityWrite")
                        } else {
                            history.push("/LoginPopupPage")
                        }}}>글쓰기</WriteBtn>
                </CommunityHead>
                <Searchbar />
                <CommunityList><Community CommuList={CommuList} page={page}/></CommunityList>
                <Pagebar total={CommuList.length} page={page} setPage={setPage}/>
            </CommunityMain>
        </div>
    );
}

export default CommunityPage