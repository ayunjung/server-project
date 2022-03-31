import React from 'react'
import styled from 'styled-components'
import Topbar from '../components/Topbar'
import Searchbar from '../components/Searchbar';
import Community from '../components/Community';

function CommunityPage() {

    const CommunityMain = styled.div`
        width: 800px;
        margin: 30px auto;
    `

    return (
        <CommunityMain>
            <Topbar />
            <h1>커뮤니티</h1>
            <Searchbar />
            <Community />
        </CommunityMain>
    );
}

export default CommunityPage;