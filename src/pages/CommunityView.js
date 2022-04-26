import React from 'react'
import styled from 'styled-components'
import Topbar from '../components/Topbar'
import CommuView from '../components/CommuView'



function CommunityView() {

    const Top = styled.div`
        width: 1200px;
        margin: 30px auto;
    `
    const PostViewdiv = styled.div`
        width: 1000px;
        margin: 0 auto;
    `

    return (
        <div>
            <Top><Topbar /></Top>
            <PostViewdiv>
                <CommuView />
            </PostViewdiv>
        </div>
    );
}

export default CommunityView;