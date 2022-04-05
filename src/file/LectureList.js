import React from 'react'
import styled from 'styled-components'
import Topbar from '../components/Topbar'
import LectureField from '../components/LectureField'
import LecSearchbar from '../components/LecSearchbar'
import Pagebar from '../components/Pagebar'

function LectureList() {

    const Top = styled.div`
        width: 1200px;
        margin: 30px auto;
    `
    const LectureMain = styled.div`
        width: 1200px;
        margin: 0 auto;
        display: flex;
    `
    const LecPageleft = styled.div`
        width: 20%;
        margin: 10px;
    `
    const LecPageright = styled.div`
        width: 80%;
        margin: 10px;
    `

    return (
        <div>
            <Top><Topbar /></Top>
            <LectureMain>
                <LecPageleft>
                    <LectureField />
                </LecPageleft>
                <LecPageright>
                    <LecSearchbar />
                </LecPageright>
            </LectureMain>
            <Pagebar />
        </div>
    );
}

export default LectureList