import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Writing = () => {

    const Write = styled.div`
        width: 1000px;
    `
    const WriteMain = styled.div`
        width: 100%;
        border-top: 2px solid #000;
    `
    const WriteTitle = styled.div`
        border-bottom: 1px solid #000;
    `
    const WriteTitleInput = styled.input`
        width: 90%;
        padding: 10px;
        box-sizing: border-box;
    `
    const Writedt = styled.dt`
        display: inline-block;
        vertical-align: middle;
        width: 100px;
        text-align: center;
        line-height: 40px;
    `
    const Writedd = styled.dd`
        display: inline-block;
        vertical-align: middle;
        width: calc(100% - 100px);
    `
    const WriteContent = styled.div`
        border-bottom: 2px solid #000;
    `
    const WriteTextarea = styled.textarea`
        display: block;
        width: 100%;
        height: 450px;
        padding: 15px;
        box-sizing: border-box;
        border: 0;
        resize: vertical;
    `
    const WriteBtnBox = styled.div`
        width: 400px;
        display: flex;
        padding: 20px;
        font-size: 20px;
        text-align: center;
        margin: 0 auto;
    `
    const WriteBtn = styled.div`
        width: 150px;
        height: 40px;
        border-radius: 5px;
        margin: 0 20px;
        background-color: #29b2ef;
        color: #fff;
        line-height: 40px;
        text-align: center;
    `

  return (
    <Write>
        <WriteMain>
            <WriteTitle>
                <dl style={{display: 'flex'}}>
                    <Writedt>제목</Writedt>
                    <Writedd><WriteTitleInput type="text" placeholder="제목" /></Writedd>
                </dl>
            </WriteTitle>
            <WriteContent>
                <WriteTextarea placeholder="본문" />
            </WriteContent>
        </WriteMain>
        <WriteBtnBox>
            <WriteBtn><Link to="/CommunityPage" style={{ textDecoration: 'none', color: 'white', display:'block' }}>등록</Link></WriteBtn>
            <WriteBtn style={{backgroundColor: '#e8e8e8'}}><Link to="/CommunityPage" style={{ textDecoration: 'none', color: 'black', display:'block' }}>취소</Link></WriteBtn>
        </WriteBtnBox>
    </Write>
  )
}

export default Writing