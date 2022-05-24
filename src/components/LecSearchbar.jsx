import React from 'react'
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

const Icondiv = styled.div `
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

const LecSearchbar = ({handleSearch}) => {

  return (
    <SLecSearchbarMain>
      <Searchbar>
        <Icondiv><BsSearch size="30"/></Icondiv>
        <Input type="search" onChange={(e) => handleSearch(e)}/>
      </Searchbar>
      <Select name="array">
        <option value="">조회순</option>
        <option value="">후기순</option>
        <option value="">수강생순</option>
      </Select>
    </SLecSearchbarMain>
  )
}

export default LecSearchbar