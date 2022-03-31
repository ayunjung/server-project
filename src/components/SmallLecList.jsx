import React from 'react'
import styled from 'styled-components'

const SmallLecList = () => {

    const SmallLecList = styled.ul`
        margin : 1px;
        width : 614px;
        border : 3px solid black;
        height : 200px;
        border-Radius : 10px;
        padding : 5px 10px 0 10px;
    `

  return (
    <SmallLecList>
        {/*map((data)=><li>{data}</li>)*/}
        <li><label><input type="checkbox" /> Chapter 1 : HML을 통한 웹사이트 구조 설계</label></li>
        <li><label><input type="checkbox" /> Chapter 2 : CSS 기본 개념과 레더링 원리</label></li>
        <li><label><input type="checkbox" /> Chapter 3: CSS 기본스타일 적용방법</label></li>
        <li><label><input type="checkbox" /> Chapter 4: Layout 설정</label></li>
    </SmallLecList>
  )
}


export default SmallLecList