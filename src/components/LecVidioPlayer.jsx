import React from 'react'
import styled from 'styled-components'

const LecVidio = () => {
        const SLecVidio = styled.div`
        width : 750px;
        `
        const SVidioWrap = styled.div`
            width : 100%;
            height : 500px;
            background : gray;
        `
        const SPTitle = styled.p`
            font-size : 20px;
            font-weight : bold;
            text-align : center;
            margin-top : 5px;
        `

  return (
    <SLecVidio>
        <SVidioWrap>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/tZooW6PritE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </SVidioWrap>
        <SPTitle>Chapter 1 : HTML을 통한 웹사이트 구조 설계</SPTitle>
    </SLecVidio>
  )
}

export default LecVidio