import React from 'react'
import styled from 'styled-components'
import Topbar from '../components/Topbar'
import LecInfoHead from '../components/LecInfoHead';
import LecInfoTime from '../components/LecInfoTime';
import SmallLecList from '../components/SmallLecList';

function LectureView() {

    const LecView = styled.div`
        width: 800px;
        margin: 30px auto;
    `

    const LecViewdiv = styled.div`
        width: 100%;
        padding: 20px 0;
    `

    return (
        <LecView>
            <Topbar />
            <LecViewdiv><LecInfoHead /></LecViewdiv>
            <LecViewdiv><LecInfoTime /></LecViewdiv>
            <LecViewdiv><SmallLecList /></LecViewdiv>
        </LecView>
    );
}

export default LectureView;