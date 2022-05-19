import React from 'react'
import styled from 'styled-components'
import Topbar from '../components/Topbar';
import QueWriting from '../components/QueWriting';

const Writeform = styled.div`
    width: 1000px;
    margin: 0 auto;
`

function Writepage() {

    return (
        <div>
            <Topbar />
            <Writeform>
                <QueWriting/>
            </Writeform>
        </div>
    );
}

export default Writepage;