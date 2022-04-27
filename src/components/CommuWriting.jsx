import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Write = styled.form`
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
    height : 50px;
    padding: 10px;
    box-sizing: border-box;
`
const Writedt = styled.dt`
    display: inline-block;
    vertical-align: middle;
    width: 100px;
    text-align: center;
    line-height: 50px;
    font-size: 25px;
`
const Writedd = styled.dd`
    display: inline-block;
    vertical-align: middle;
    width: calc(100% - 100px);
`
const Select = styled.select `
  width : 120px;
  height : 50px;
  border-radius : 5px;
  margin-left : 5px;
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
    padding: 15px;
    font-size: 20px;
    text-align: center;
    margin: 0 auto;
`
const WriteBtn = styled.button`
    width: 150px;
    height: 40px;
    border: 0;
    border-radius: 5px;
    margin: 0 20px;
    background-color: #29b2ef;
    color: #fff;
    line-height: 40px;
    text-align: center;
    font-size: 20px;
`
const CancelBtn = styled.div`
    width: 150px;
    height: 40px;
    border-radius: 5px;
    margin: 0 20px;
    background-color: #e8e8e8;
    color: #fff;
    line-height: 40px;
    text-align: center;
`

const CommuWriting = () => {

    const [Email, setEmail] = useState("");
    const [Title, setTitle] = useState("");
    const [Sort, setSort] = useState("");
    const [Content, setContent] = useState("");

    const onEmailHandler = (e) => {
        setEmail(e.target.value)
    }
    const onTitleHandler = (e) => {
        setTitle(e.target.value)
    }
    const onSortHandler = (e) => {
        setSort(e.target.value)
    }
    const onContentHandler = (e) => {
        setContent(e.target.value)
    }

  return (
    <Write>
        <WriteMain>
            <WriteTitle>
                <dl style={{display: 'flex'}}>
                    <Writedt>제목</Writedt>
                    <Writedd><WriteTitleInput type="text" value={Title} onChange={onTitleHandler} placeholder="제목" /></Writedd>
                    <Select name="array" value={Sort} onChange={onSortHandler}>
                        <option value="웹개발">웹개발</option>
                        <option value="프론트엔드">프론트엔드</option>
                        <option value="백엔드">백엔드</option>
                        <option value="프로그래밍언어">프로그래밍언어</option>
                        <option value="게임만들기">게임만들기</option>
                        <option value="프로젝트관리">프로젝트관리</option>
                    </Select>
                </dl>
            </WriteTitle>
            <WriteContent>
                <WriteTextarea value={Content} onChange={onContentHandler} placeholder="본문" />
            </WriteContent>
        </WriteMain>
        <WriteBtnBox>
            <WriteBtn type="submit" onClick={(e)=>{
                e.preventDefault();
                fetch('http://localhost:3001/makedoc', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: Email,
                    title: Title,
                    sort : Sort,
                    content : Content,
                }),
                }).then((res)=>
                    res.json()
                ).then(data=>{console.log(data)})
            }}><Link to="/CommunityPage" style={{ textDecoration: 'none', color: 'white', display:'block' }}>등록</Link></WriteBtn>
            <CancelBtn><Link to="/CommunityPage" style={{ textDecoration: 'none', color: 'black', display:'block' }}>취소</Link></CancelBtn>
        </WriteBtnBox>
    </Write>
  )
}

export default CommuWriting