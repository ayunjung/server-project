import React, { useEffect,useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

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
const Cancelbtn = styled.div `
    width: 200px;
    height: 40px;
    margin: 10px 5px 0;
    font-size: 20px;
    background-color: #e8e8e8;
    border-radius: 5px;
    line-height: 40px;
    text-align: center;
`

const CommunityView = (props) => {
    const num = props.match.params.commu.docnum;

    const [CommuPost, setCommuPost] = useState({});

    useEffect(()=>{
        fetch('http://localhost:3001/readcommudocinfo' + num, {
            method: "post",
            headers: {
            "Content-Type": "application/json",
            },
        }).then((res)=>
            res.json(),
        ).then(data=>{setCommuPost(data)})
    },[])

    return (
        <Maindiv>
            <Post>
                <PostTitle>{CommuPost.title}</PostTitle>
                <PostInfo>
                    <PostInfoCon>
                        <dt>번호</dt>
                        <PostInfodd>{CommuPost.docnum}</PostInfodd>
                    </PostInfoCon>
                    <PostInfoCon>
                        <dt>작성일</dt>
                        <PostInfodd>{CommuPost.date}</PostInfodd>
                    </PostInfoCon>
                    <PostInfoCon>
                        <dt>분류</dt>
                        <PostInfodd>{CommuPost.sort}</PostInfodd>
                    </PostInfoCon>
                </PostInfo>
                <PostContent>
                    {CommuPost.content}
                </PostContent>
            </Post>
            <div style={{display: 'flex'}}>
                <RePostBtn><Link to="/CommunityWrite" style={{ textDecoration: 'none', color: 'white', display:'block' }}>수정</Link></RePostBtn>
                <Cancelbtn><Link to="/CommunityPage" style={{ textDecoration: 'none', color: 'black', display:'block' }}>취소</Link></Cancelbtn>
            </div>
        </Maindiv>
    )
}

export default CommunityView