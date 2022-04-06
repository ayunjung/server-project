import React from 'react'
import styled from 'styled-components'
import Topbar from '../components/Topbar'
import LecInfoHead from '../components/LecInfoHead';
import LecInfoTime from '../components/LecInfoTime';
import SmallLecList from '../components/SmallLecList';

function LectureView() {

    const Top = styled.div`
        width: 1200px;
        margin: 30px auto;
    `
    const LecView = styled.div`
        width: 700px;
        margin: 0 auto;
    `
    const LecViewdiv = styled.div`
        width: 100%;
        padding: 20px 0;
    `

    return (
        <div>
            <Top><Topbar /></Top>
            <LecView>
                <LecViewdiv><LecInfoHead /></LecViewdiv>
                <LecViewdiv><LecInfoTime /></LecViewdiv>
                <LecViewdiv><SmallLecList /></LecViewdiv>
            </LecView>
        </div>
    );
}

export default LectureView;