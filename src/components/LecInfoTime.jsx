import React from 'react'
import styled from 'styled-components'

const LecInfoTime = () => {

    const SLecInfoTime = styled.div`
        width : 614px;
        padding : 0 20px;
    `

    const LecNum = styled.div`
        font-size : 27px;
        font-weight : bold;
    `

    const LecTime = styled.div`
        font-size : 27px;
        font-weight : bold;
    `

    const LecRunPerDiv = styled.div`
        margin : 10px 0;
        font-size : 20px;
        font-weight : bold;
        display : flex;
    `

    const Persqr = styled.div`
        width : 350px;
        background : lightgray;
        margin : 0 20px;
        border-radius : 10px;
    `

  return (
    <SLecInfoTime>
        <LecNum>총 강좌수 : 6강</LecNum>
        <LecTime>강의 시간 : 151시간</LecTime>
        <LecRunPerDiv>
            <div>강의 진행율</div>
            <Persqr></Persqr>
            <div>100%</div>
        </LecRunPerDiv>
    </SLecInfoTime>
  )
}

export default LecInfoTime