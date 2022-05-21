import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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

const ListenerReview = styled.span`
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

const LecInfoHead = ({LecData}) => {

  return (
    <SLecInfoHead>
        <LeftDiv><SImg src="" alt="강의사진" /></LeftDiv>
        <RightDiv>
            <LecTitle>강의명 : {LecData.title}</LecTitle>
            <LecMaker>강사명 : {LecData.teacher}</LecMaker>
            <LecListener>수강생 : 10706</LecListener>
            <LecMore><ListenerReview>수강생 후기</ListenerReview><Link to="/LectureVidio" style={{ textDecoration: 'none', color: 'black', display:'block' }}><SubButton>수강하기</SubButton></Link></LecMore>
        </RightDiv>
    </SLecInfoHead>
  )
}

export default LecInfoHead
