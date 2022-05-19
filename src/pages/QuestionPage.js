import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import Topbar from '../components/Topbar'
import Searchbar from '../components/Searchbar'
import Question from '../components/Question'
import Pagebar from '../components/Pagebar'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

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

function QuestionPage() {

    let history = useHistory();

    const [QueList, setQueList] = useState([]);
    const [page, setPage] = useState(1);
    const [LoginState,setLoginState] = useState("");

    axios.defaults.withCredentials = true;

    axios.post('http://localhost:3001/login', {
        }).then(response => {
            setLoginState(response.data.session.logined)
    })

    useEffect(()=>{
        fetch('http://localhost:3001/readreqlist', {
            method: "post",
            headers: {
            "Content-Type": "application/json",
            },
        }).then((res)=>
            res.json(),
        ).then(data=>{setQueList(data.data)})
    },[])

    return (
        <div>
            <Topbar />
            <QuestionMain>
                <QuestionHead>
                    <h1>Q{'&'}A</h1>
                    <WriteBtn onClick={()=>{
                        if(LoginState === true) {
                            history.push("/QuestionWrite")
                        } else {
                            history.push("/LoginPopupPage")
                        }}}>글쓰기</WriteBtn>
                </QuestionHead>
                <Searchbar />
                <QuestionList><Question QueList={QueList} page={page} limit={7}/></QuestionList>
                <Pagebar total={QueList.length} page={page} setPage={setPage} limit={7}/>
            </QuestionMain>
        </div>
    );
}

export default QuestionPage