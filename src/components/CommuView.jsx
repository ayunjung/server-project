import React, { useEffect,useState } from 'react'
import styled from 'styled-components'
import { Link, useHistory, useParams } from 'react-router-dom'

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

const CommunityView = () => {

    let History = useHistory();

    const { communum } = useParams();

    const [CommuList, setCommuList] = useState([]);
    const [CommuData, setCommuData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/readcommulist', {
            method: "post",
            headers: {
            "Content-Type": "application/json",
            },
        }).then((res)=>
            res.json(),
        ).then(data=>{setCommuList(data)})
    },[])

    const Data = (docnum) => {
        setCommuData(CommuList.filter(x => x.docnum === docnum)[0])
    }

    useEffect(() => {
        Data(communum)
        console.log(CommuData)
    // eslint-disable-next-line
    },[])

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
                <RePostBtn><Link to="/CommunityWrite" style={{ textDecoration: 'none', color: 'white', display:'block' }}>수정</Link></RePostBtn>
                <Cancelbtn onClick={()=>{ History.goBack() }}>취소</Cancelbtn>
            </div>
        </Maindiv>
    )
}

export default CommunityView