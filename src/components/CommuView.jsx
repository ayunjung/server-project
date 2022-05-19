import React, { useEffect,useState } from 'react'
import styled from 'styled-components'
import { Link, useHistory, useParams } from 'react-router-dom'
import axios from 'axios'

const Maindiv = styled.div`
    width: 1000px;
`
const Post = styled.div`
    width: 100%;
    border-top: 2px solid #000;
`
const PostTitle = styled.div`
    padding: 20px 15px;
    border-bottom: 1px dashed #ddd;
    font-size: 20px;
`
const PostInfo = styled.div`
    border-bottom: 1px solid #999;
`
const PostInfoCon = styled.dl`
    display: inline-block;
    padding: 0 30px;
    position: relative;
`
const PostInfodd = styled.dd`
    margin: 0;
    text-align: center;
`
const PostContent = styled.div`
    height: 380px;
    padding: 15px;
    border-bottom: 2px solid #000;
    line-height: 160%;
    overflow: auto;
`
const RePostBtn = styled.div`
    width: 200px;
    height: 40px;
    margin: 10px 5px 0;
    font-size: 20px;
    background-color: #29b2ef;
    color: #000;
    border-radius: 5px;
    line-height: 40px;
    text-align: center;
`
const DeleteBtn = styled.div`
    width: 200px;
    height: 40px;
    margin: 10px 5px 0;
    font-size: 20px;
    background-color: #e8e8e8;
    border-radius: 5px;
    line-height: 40px;
    text-align: center;
`
const Gobackbtn = styled.div `
    width: 200px;
    height: 40px;
    margin: 10px 5px 0;
    font-size: 20px;
    background-color: #e8e8e8;
    border-radius: 5px;
    line-height: 40px;
    text-align: center;
`

const CommunityView = () => {

    let History = useHistory();

    const { communum } = useParams();

    const [CommuData, setCommuData] = useState([]);
    const [Email,setEmail] = useState("");

    axios.defaults.withCredentials = true;

    axios.post('http://localhost:3001/login', {
        }).then(response => {
            setEmail(response.data.session.sid)
    })

    useEffect(() => {
        fetch('http://localhost:3001/readcommudocinfo', {
            method: "post",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                docnum: communum,
            })
        }).then((res)=>
            res.json(),
        ).then(data=>{setCommuData(data.data)})
    },[communum])

    return (
        <Maindiv>
            <Post>
                <PostTitle>{CommuData.title}</PostTitle>
                <PostInfo>
                    <PostInfoCon>
                        <dt>번호</dt>
                        <PostInfodd>{CommuData.docnum}</PostInfodd>
                    </PostInfoCon>
                    <PostInfoCon>
                        <dt>작성일</dt>
                        <PostInfodd>{CommuData.date}</PostInfodd>
                    </PostInfoCon>
                    <PostInfoCon>
                        <dt>분류</dt>
                        <PostInfodd>{CommuData.sort}</PostInfodd>
                    </PostInfoCon>
                </PostInfo>
                <PostContent>{CommuData.content}</PostContent>
            </Post>
            <div style={{display: 'flex'}}>
                {Email === CommuData.writer &&                 
                <>
                    <RePostBtn><Link to="/CommunityWrite" style={{ textDecoration: 'none', color: 'white', display:'block' }}>수정</Link></RePostBtn>
                    <DeleteBtn onClick={(e)=>{
                        e.preventDefault();
                        fetch('http://localhost:3001/deldoc', {
                        method: "post",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body : JSON.stringify({
                            docnum: communum,
                        })
                        }).then((res)=>
                            res.json(),
                        ).then(()=>{ History.push("/CommunityPage") }
                    )}}>삭제</DeleteBtn>
                </>}
                <Gobackbtn onClick={()=>{ History.goBack() }}>목록</Gobackbtn>
            </div>
        </Maindiv>
    )
}

export default CommunityView