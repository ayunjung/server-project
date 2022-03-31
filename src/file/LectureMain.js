import React from 'react'
import styled from 'styled-components'
import Topbar from '../components/Topbar';
import Searchbar from '../components/Searchbar';

function LectureMain() {

    const LecMaindiv = styled.div`
        width: 1200px;
        margin: 20px auto;
    `
    const LecMain = styled.div`
        display: flex;
    `
    const LecMainleft = styled.div`
        width: 65%;
    `
    const LecMainright = styled.div`
        width: 35%;
    `

    return (
        <LecMaindiv>
            <Topbar />
            <LecMain>
                <LecMainleft>
                    <Searchbar />
                </LecMainleft>
                <LecMainright>

                </LecMainright>
            </LecMain>
        </LecMaindiv>
    );
}

export default LectureMain;