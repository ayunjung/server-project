import React, {useEffect} from 'react'
import styled from 'styled-components';
import { BsSearch } from "react-icons/bs";

const Searchbar = styled.div `
  width : 500px;
  height : 50px;
  border : 1px solid #999;
  border-radius : 5px;
  display : flex;
  margin-left: 80px;
`

const Icondiv = styled.button `
  background : #cacaca;
  height : 100%;
  width : 50px;
  border-radius : 5px 0 0 5px;
  line-height: 60px;
  text-align: center;
`

const Input = styled.input `
  width : 450px;
  font-size : 20px;
  padding : 7px;
  border: 0;
`
const Select = styled.select `
  width : 100px;
  height : 50px;
  background : #cacaca;
  border-radius : 5px;
  margin-left : 5px;
`

const SLecSearchbarMain = styled.div `
  display : flex;
`

const LecSearchbar = () => {

  useEffect(()=>{
    fetch('http://localhost:3001/showlevidio', {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
       
        title: "1",
        content : 'gd',
        views: 'gd',
        data : 'gd'
        }),
    }).then((res)=>
        res.json()
    ).then(data=>{console.log(data.success);
    if((data.success) === '1'){
        alert('영상 재생 실패.');
    }})
  }, []);

  return (
    <SLecSearchbarMain>
      <Searchbar>
        <Icondiv type='submit'>
          <BsSearch size="30"/>
        </Icondiv>
        <Input type="Search" />
      </Searchbar>
      <Select name="array" id="">
        <option value="">조회순</option>
        <option value="">후기순</option>
        <option value="">수강생순</option>
      </Select>
    </SLecSearchbarMain>
  )
}

export default LecSearchbar