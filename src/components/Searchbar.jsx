//https://react-icons.github.io/react-icons/#/
import React from 'react'
import styled from 'styled-components'
import { BsSearch } from "react-icons/bs";

const Searchbar = () => {

    const Searchbar = styled.div`
        width : 400px;
        height : 50px;
        border : 1px solid #999;
        border-radius : 5px;
        display : flex;
    `

    const Icondiv = styled.button`
        background : #cacaca;
        height : 100%;
        width : 50px;
        border-radius : 5px 0 0 5px;
        line-height: 60px;
        text-align: center;
    `

    const Input = styled.input`
        width : 350px;
        font-size : 20px;
        padding : 7px;
        border: 0;
    `

    return (
        <Searchbar>
            <Icondiv type='submit' onClick={(e)=>{
            e.preventDefault();
            fetch('http://localhost:3001/readcommulist', {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                "data": [
                    {
                        "docnum": 1,
                        "sort": "글",
                        "title": "제목",
                        "date": "2022-03-30T11:55:12.000Z",
                        "writer": "Test@naver.com",
                        "views": 0,
                        "content": "내용"
                    },
                    {
                        "docnum": 2,
                        "sort": "글",
                        "title": "제목2",
                        "date": "2022-03-30T11:55:20.000Z",
                        "writer": "Test@naver.com",
                        "views": 0,
                        "content": "내용"
                    },
                    {
                        "docnum": 3,
                        "sort": "글",
                        "title": "제목3",
                        "date": "2022-03-30T11:55:22.000Z",
                        "writer": "Test@naver.com",
                        "views": 0,
                        "content": "내용"
                    },
                    {
                        "docnum": 4,
                        "sort": "글",
                        "title": "제목4",
                        "date": "2022-03-30T11:55:23.000Z",
                        "writer": "Test@naver.com",
                        "views": 0,
                        "content": "내용"
                    },
                    {
                        "docnum": 5,
                        "sort": "글",
                        "title": "제목5",
                        "date": "2022-03-30T11:55:24.000Z",
                        "writer": "Test@naver.com",
                        "views": 0,
                        "content": "내용"
                    },
                    {
                        "docnum": 6,
                        "sort": "글",
                        "title": "제목6",
                        "date": "2022-03-30T11:55:24.000Z",
                        "writer": "Test@naver.com",
                        "views": 0,
                        "content": "내용"
                    },
                    {
                        "docnum": 7,
                        "sort": "글",
                        "title": "제목7",
                        "date": "2022-03-30T11:55:25.000Z",
                        "writer": "Test@naver.com",
                        "views": 0,
                        "content": "내용"
                    }
                ]
              }),
            }).then((res)=>
                res.json()
            ).then(data=>{console.log(data)})
        }}>
            <BsSearch size="30" />
            </Icondiv>
            <Input type="Search" />
        </Searchbar>
    )
}

export default Searchbar