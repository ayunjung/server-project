import React from 'react'
import styled from 'styled-components'
import Topbar from '../components/Topbar'
import LecVidioPlayer from '../components/LecVidioPlayer'
import Classbar from '../components/Classbar'

function LectureVidio() {

    const Top = styled.div`
        width: 1200px;
        margin: 30px auto;
    `
    const LecVidio = styled.div`
        width: 800px;
        margin: 0 auto;
    `
    const Vidio = styled.div`
        margin: 20px 0;
    `

    return (
        <div>
            <Top><Topbar /></Top>
            <LecVidio>
                <Vidio><LecVidioPlayer /></Vidio>
                <Classbar />
            </LecVidio>
        </div>
    );
}

export default LectureVidio;