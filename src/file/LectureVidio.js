import React from 'react'
import styled from 'styled-components'
import Topbar from '../components/Topbar'
import LecVidioPlayer from '../components/LecVidioPlayer'
import Classbar from '../components/Classbar'

function LectureVidio() {

    const LecVidio = styled.div`
        width: 800px;
        margin: 20px auto;
    `
    const Vidio = styled.div`
        margin: 20px 0;
    `

    return (
        <LecVidio>
            <Topbar />
            <Vidio><LecVidioPlayer /></Vidio>
            <Classbar />
        </LecVidio>
    );
}

export default LectureVidio;