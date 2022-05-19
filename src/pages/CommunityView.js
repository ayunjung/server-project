import React from 'react'
import styled from 'styled-components'
import Topbar from '../components/Topbar'
import CommuView from '../components/CommuView'

const PostViewdiv = styled.div`
    width: 1000px;
    margin: 0 auto;
`

function CommunityView() {

    return (
        <div>
            <Topbar />
            <PostViewdiv>
                <CommuView/>
            </PostViewdiv>
        </div>
    );
}

export default CommunityView;