import React from 'react'
import styled from 'styled-components'
import Topbar from '../components/Topbar';
import CommuWriting from '../components/CommuWriting';



function Writepage() {

    const Top = styled.div`
        width: 1200px;
        margin: 30px auto;
    `
    const Writeform = styled.div`
        width: 1000px;
        margin: 0 auto;
    `

    return (
        <div>
            <Top><Topbar /></Top>
            <Writeform>
                <CommuWriting />
            </Writeform>
        </div>
    );
}

export default Writepage;