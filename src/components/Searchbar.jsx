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

    const [filterData, setFilterData] = useState([]);

    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (e) => {
        const searchWord = e.target.value;
        setWordEntered(searchWord)
        const newFilter = data.filter((value)=>{
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        })

        if(searchWord === "") {
            setFilterData([]);
        }else{
            setFilterData(newFilter);
        }
    }

    return (
        <Search>
            <Icondiv type='submit'><BsSearch size="30" /></Icondiv>
            <Input type="Search" onChange={handleFilter} value={wordEntered} />
            {
                filterData.length !== 0 && (
                    <DataResult>
                        {filterData.slice(0, 15).map((product, key)=>{
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