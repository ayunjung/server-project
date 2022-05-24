import React from 'react'
import styled from 'styled-components'

const Select = styled.select `
    width : 200px;
    height : 50px;
    border-radius : 5px;
`

const LectureField = ({sort, Lecsort, LecsortHandler}) => {

    return (
        <Select value={Lecsort} onChange={LecsortHandler} key={sort} defaultValue={sort}>
            <option value="전체보기">전체보기</option>
            <option value="웹개발">웹개발</option>
            <option value="프론트엔드">프론트엔드</option>
            <option value="백엔드">백엔드</option>
            <option value="프로그래밍 언어">프로그래밍 언어</option>
            <option value="게임 만들기">게임 만들기</option>
            <option value="프로젝트 관리">프로젝트 관리</option>
        </Select>
    )
}

export default LectureField