import React from 'react'
import styled from 'styled-components'

const LecInfoHead = () => {

    const SLecInfoHead = styled.div`
        display : flex;
        margin : 20px 0;
    `

    const LeftDiv = styled.div`
        width : 200px;
        background : gray;
        height : 120px;
    `

    const RightDiv = styled.div`
        height : 120px;
    `

    const LecTitle = styled.p`
        font-weight : bold;
        font-size : 19px;
        margin-top : 5px;
    `

    const LecMaker = styled.p`
        font-weight : bold;
        font-size : 19px;
        margin-top : 5px;
    `

    const LecListener = styled.p`
        font-weight : bold;
        font-size : 19px;
        margin-top : 5px;
    `

    const LecMore = styled.p`
        display : flex;
    `

    const ListenerReview = styled.div`
        margin : 0 20px 0 30px;
        text-decoration : underline;
    `

    const SubButton = styled.button`
        width : 150px;
        border-radius : 15px;
        font-weight : bold;
        background : #3498db;
        outline : 0;
        border : 0;
        color : white;
        margin-left : 20px;
    `

    const SImg = styled.img`
        width : 100%;
        height : 100%;
    `


  return (
    <SLecInfoHead>
        <LeftDiv><SImg src="" alt="강의사진" /></LeftDiv>
        <RightDiv>
            <LecTitle>강의명 : 초보자를 위한 HTML{'&'}CSS 동작과 원리</LecTitle>
            <LecMaker>강사명 : 윤지수</LecMaker>
            <LecListener>수강생 : 10706</LecListener>
            <LecMore><ListenerReview>수강생 후기</ListenerReview><SubButton>수강하기</SubButton></LecMore>
        </RightDiv>
    </SLecInfoHead>
  )
}

export default LecInfoHead
