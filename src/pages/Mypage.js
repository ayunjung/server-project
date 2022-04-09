import React from 'react'
import styled from 'styled-components'
import Topbar from '../components/Topbar';
import UserInfo from '../components/UserInfo';



function Mypage() {

    const Top = styled.div`
        width: 1200px;
        margin: 30px auto;
    `
    const Mypagediv = styled.div`
        width: 1000px;
        margin: 0 auto;
    `

    return (
        <div>
            <Top><Topbar /></Top>
            <Mypagediv>
                <UserInfo />
            </Mypagediv>
        </div>
    );
}

export default Mypage;