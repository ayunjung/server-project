import React from 'react'
import styled from 'styled-components'
import Topbar from '../components/Topbar'
import LecInfoHead from '../components/LecInfoHead';
import LecInfoTime from '../components/LecInfoTime';
import SmallLecList from '../components/SmallLecList';

const LecView = styled.div`
    width: 700px;
    margin: 0 auto;
`
const LecViewdiv = styled.div`
    width: 100%;
    padding: 20px 0;
`

function LectureView() {

    return (
        <div>
            <Topbar />
            <LecView>
                <LecViewdiv><LecInfoHead /></LecViewdiv>
                <LecViewdiv><LecInfoTime /></LecViewdiv>
                <LecViewdiv><SmallLecList /></LecViewdiv>
            </LecView>
        </div>
    );
}

export default LectureView;