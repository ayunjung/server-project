import styled from 'styled-components'
import React from 'react'

const Select = styled.select `
    width : 200px;
    height : 50px;
    border-radius : 5px;
  `

const LectureField = () => {
    return (
        <Select name="array" id="">
            <option value="">웹개발</option>
            <option value="">프론트엔드</option>
            <option value="">백엔드</option>
            <option value="">프로그래밍 언어</option>
            <option value="">게임 만들기</option>
            <option value="">프로젝트 관리</option>
        </Select>
    )
}

export default LectureField