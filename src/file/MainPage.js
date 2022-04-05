import React from 'react'
import styled from 'styled-components'
import Topbar from '../components/Topbar';
import Searchbar from '../components/Searchbar';

function MainPage() {

    const Top = styled.div`
        width: 1200px;
        margin: 30px auto;
    `
    const LecMaindiv = styled.div`
        width: 1200px;
        margin: 0 auto;
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
        <div>
            <Top><Topbar /></Top>
            <LecMaindiv>
                <LecMain>
                    <LecMainleft>
                        <Searchbar />
                    </LecMainleft>
                    <LecMainright>

                    </LecMainright>
                </LecMain>
            </LecMaindiv>
        </div>
    );
}

export default MainPage;