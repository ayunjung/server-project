import React from 'react'
import styled from 'styled-components'

const Community = () => {

    const Communitytop = styled.div`
        display: flex;
        width : 1000px;
        height : 40px;
        border-bottom : 2px solid #999;
        line-height: 40px;
        text-align: center;
    `
    const CommunityElement = styled.div`
        width : 15%;
    `
    const CommunityContent = styled.div`
        width : 55%;
    `
    const CommunityMain = styled.ul`
        margin: 0;
        padding: 0;
    `
    const CommunityList = styled.li`
        display: flex;
        width : 1000px;
        height : 50px;
        border-bottom : 1px solid #999;
        line-height: 50px;
        text-align: center;
    `


    return (
        <div>
            <Communitytop>
                <CommunityElement>No</CommunityElement>
                <CommunityElement>분류</CommunityElement>
                <CommunityContent>제목</CommunityContent>
                <CommunityElement>작성자</CommunityElement>
            </Communitytop>
            <CommunityMain>
                <CommunityList>
                    <CommunityElement>1</CommunityElement>
                    <CommunityElement>미해결</CommunityElement>
                    <CommunityContent>자바스크립트 질문</CommunityContent>
                    <CommunityElement>정아윤</CommunityElement>
                </CommunityList>
                <CommunityList>
                    <CommunityElement>2</CommunityElement>
                    <CommunityElement>미해결</CommunityElement>
                    <CommunityContent>자바스크립트 질문</CommunityContent>
                    <CommunityElement>정아윤</CommunityElement>
                </CommunityList>
            </CommunityMain>
        </div>
    )
}

export default Community