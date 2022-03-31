import React from 'react'
import styled from 'styled-components'
import Topbar from '../components/Topbar';
import UserInfo from '../components/UserInfo';
import Usericon from '../components/Usericon';



function LectureView() {

    const LecViewdiv = styled.div`
        width: 1200px;
        margin: 20px auto;
    `
    const LecViewMain = styled.div`
        display: flex;
    `
    const LecViewleft = styled.div`
        width: 65%;
    `
    const LecViewight = styled.div`
        width: 35%;
    `

    return (
        <LecViewdiv>
            <Topbar />
            <LecViewMain>
                
            </LecViewMain>
        </LecViewdiv>
    );
}

export default LectureView;