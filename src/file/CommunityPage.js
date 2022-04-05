import React from 'react'
import styled from 'styled-components'
import Topbar from '../components/Topbar'
import Searchbar from '../components/Searchbar';
import Community from '../components/Community';
import Pagebar from '../components/Pagebar';

function CommunityPage() {

    const Top = styled.div`
        width: 1200px;
        margin: 30px auto;
    `
    const CommunityMain = styled.div`
        width: 1000px;
        margin: 0 auto;
    `
    const CommunityList = styled.div`
        margin: 20px 0;
    `

    return (
        <div>
            <Top><Topbar /></Top>
            <CommunityMain>
                <h1>커뮤니티</h1>
                <Searchbar />
                <CommunityList><Community /></CommunityList>
                <Pagebar />
            </CommunityMain>
        </div>
    );
}

export default CommunityPage