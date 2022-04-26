import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CommunityView = () => {

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
        padding: 15px;
        border-bottom: 2px solid #000;
        line-height: 160%;
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

    return (
        <Maindiv>
            <Post>
                <PostTitle>글 제목이 들어갈 자리</PostTitle>
                <PostInfo>
                    <PostInfoCon>
                        <dt>번호</dt>
                        <PostInfodd>1</PostInfodd>
                    </PostInfoCon>
                    <PostInfoCon>
                        <dt>작성일</dt>
                        <PostInfodd>2021.11.14</PostInfodd>
                    </PostInfoCon>
                    <PostInfoCon>
                        <dt>분류</dt>
                        <PostInfodd>웹개발</PostInfodd>
                    </PostInfoCon>
                </PostInfo>
                <PostContent>
                    글내용이 들어가요<br />
                    글내용이 들어가요<br />
                    글내용이 들어가요<br />
                    글내용이 들어가요<br />
                    글내용이 들어가요<br />
                    글내용이 들어가요<br />
                    글내용이 들어가요<br />
                    글내용이 들어가요<br />
                    글내용이 들어가요<br />
                    글내용이 들어가요<br />
                    글내용이 들어가요<br />
                    글내용이 들어가요<br />
                    글내용이 들어가요<br />
                    글내용이 들어가요
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