//https://react-icons.github.io/react-icons/#/
import React, {useState} from 'react'
import styled from 'styled-components'
import { BsSearch } from "react-icons/bs";

const Search = styled.div`
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
    cursor: pointer;
`
const Input = styled.input`
    width : 350px;
    font-size : 20px;
    padding : 7px;
    border: 0;
`
const DataResult = styled.div`
    width: 396px;
    height: 200px;
    background-color: #fff;
    box-shadow: rgba(0,0,0,.35) 0px 5px 15px;
    overflow: hidden;
    overflow-y: auto;
    margin-top: 5px;
    border-radius: 5px;

    .dataItem{
        padding: 0 10px;
        width: 100%;
        height: 50px;
        display: flex;
        ailgn-items: center;
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
    .dataItem:hover{
        background-color: gray;
        color: #fff;
    }
`

const Searchbar = ({ data }) => {

    const [searchData, setSearchData] = useState([]);

    const [wordEntered, setWordEntered] = useState("");

    const handleSearch = (e) => {
        const searchWord = e.target.value;
        setWordEntered(searchWord)
        const newSearch = data.filter((value)=>{
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        })

        if(searchWord === "") {
            setSearchData([]);
        }else{
            setSearchData(newSearch);
        }
    }

    return (
        <Search>
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
            <Input type="Search" onChange={handleSearch} value={wordEntered} />
            {
                searchData.length !== 0 && (
                    <DataResult>
                        {searchData.slice(0, 15).map((product, key)=>{
                            return(
                                <a key={key} className='dataItem' href={product.image} target="_blank">
                                  <p>{product.title}</p>  
                                </a>
                            )
                        })}
                    </DataResult>
                )
            }
        </Search>
    )
}

export default Searchbar