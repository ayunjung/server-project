import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';
import React from 'react'

const magnifyStyle = {
    marginTop : '9',
    marginLeft : '10',
    marginRight : '10',
    height : '30',
  }

  const Manidiv = styled.div`
    background : #cacaca;
    height : 100%;
    width : 50px;
    border-radius : 5px 0 0 5px;
  `

  const SMainSearchbar = styled.div`
    width : 373px;
    height : 50px;
    border-radius : 5px;
    border : 1px solid gray;
    margin : 5px;
    display : flex;
  `

  const Input = styled.input`
    width : 320px;
    font-size : 20px;
    padding : 7px;
  `

const MainSearchbar = () => {
  return (
    <div>
        <SMainSearchbar>
            <Manidiv>
            <FontAwesomeIcon style={magnifyStyle} icon={faMagnifyingGlass} />
            </Manidiv>
            <Input></Input>
        </SMainSearchbar>
    </div>
  )
}

export default MainSearchbar