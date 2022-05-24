//https://react-icons.github.io/react-icons/#/
import React from 'react'
import styled from 'styled-components'
import { BsSearch } from "react-icons/bs";

const SearchDiv = styled.div`
    width : 400px;
    height : 50px;
    border : 1px solid #999;
    border-radius : 5px;
    display : flex;
`
const Icondiv = styled.div`
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

const Searchbar = ({ handleSearch }) => {

    return (
        <SearchDiv>
            <Icondiv><BsSearch size="30" /></Icondiv>
            <Input type="search" onChange={(e) => handleSearch(e)}/>
        </SearchDiv>
    )
}

export default Searchbar