import React from 'react'
import styled from 'styled-components'
import Topbar from '../components/Topbar'
import Searchbar from '../components/Searchbar';
import Community from '../components/Community';
import Pagebar from '../components/Pagebar';

function CommunityPage() {

    const CommunityMain = styled.div`
        width: 1000px;
        margin: 30px auto;
    `
    const CommunityList = styled.div`
        margin: 20px 0;
    `

    return (
        <CommunityMain>
            <Topbar />
            <h1>커뮤니티</h1>
            <Searchbar />
            <CommunityList><Community /></CommunityList>
            <Pagebar />
        </CommunityMain>
    );
}

export default CommunityPage