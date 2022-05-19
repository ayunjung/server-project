import React from 'react'
import styled from 'styled-components'
import Topbar from '../components/Topbar'
import QueView from '../components/QueView'

const PostViewdiv = styled.div`
    width: 1000px;
    margin: 0 auto;
`

function QuestionView() {

    return (
        <div>
            <Topbar />
            <PostViewdiv>
                <QueView/>
            </PostViewdiv>
        </div>
    );
}

export default QuestionView;