import React from 'react'
import styled from 'styled-components'
import Topbar from '../components/Topbar';
import ModifyInfo from '../components/ModifyInfo';

const Mypagediv = styled.div`
    width: 1000px;
    margin: 0 auto;
`

function ModifyInfoPage() {

    return (
        <div>
            <Topbar />
            <Mypagediv>
                <ModifyInfo />
            </Mypagediv>
        </div>
    );
}

export default ModifyInfoPage;