import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

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
    color: #000;
    line-height: 40px;
    text-align: center;
`

const QueWriting = () => {

    let history = useHistory();

    const [Email,setEmail] = useState("");
    const [Title, setTitle] = useState("");
    const [Sort, setSort] = useState("미해결");
    const [Content, setContent] = useState("");

    axios.defaults.withCredentials = true;

    axios.post('http://localhost:3001/login', {
        }).then(response => {
            setEmail(response.data.session.sid)
    })

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
                            <option value="미해결">미해결</option>
                            <option value="해결">해결</option>
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
                    fetch('http://localhost:3001/makereq', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email:  Email,
                        title: Title,
                        sort : Sort,
                        content : Content,
                    }),
                    }).then((res)=>
                        res.json()
                    ).then(()=>history.push("/QuestionPage"))
                }}>등록</WriteBtn>
                <CancelBtn onClick={()=>{ history.goBack() }}>취소</CancelBtn>
            </WriteBtnBox>
        </Write>
    )
}

export default QueWriting