import React from 'react'
import styled from 'styled-components'

const Pagebar = () => {

    const SPagebar = styled.div`
        display : flex;
    `

    const SNumberkey= styled.div`
        padding : 5px;
        border : 1px solid gray;
        border-radius : 5px;
        margin : 4px;
        font-size : 20px;
        width : 40px;
        text-align : center;
    `

    const SArrowkey= styled.div`
        padding : 5px;
        border : 1px solid gray;
        border-radius : 5px;
        margin : 4px;
        font-size : 20px;
        width : 40px;
        text-align : center;
    `

  return (
    <SPagebar>
        <SArrowkey>{'<'}</SArrowkey>
        <SNumberkey>1</SNumberkey>
        <SNumberkey>2</SNumberkey>
        <SNumberkey>3</SNumberkey>
        <SNumberkey>4</SNumberkey>
        <SNumberkey>5</SNumberkey>
        <SArrowkey>{'>'}</SArrowkey>
    </SPagebar>
  )
}

export default Pagebar