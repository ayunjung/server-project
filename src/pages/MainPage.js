import React from 'react'
import styled from 'styled-components'
import Topbar from '../components/Topbar';
import Searchbar from '../components/Searchbar';
import BestUser from '../components/BestUser';
import BestLecturer from '../components/BestLecturer';
import MainLecField from '../components/MainLecField';

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
    const VidioDiv = styled.div`
        width: 100%;
        height: 300px;
    `

    return (
        <div>
            <Top><Topbar /></Top>
            <LecMaindiv>
                <Searchbar />
                <LecMain>
                    <LecMainleft>
                        <MainLecField name="웹개발" />
                        <MainLecField name="프론트앤드" />
                        <MainLecField name="백앤드" />
                        <MainLecField name="프로그래밍 언어" />
                        <MainLecField name="게임 만들기" />
                        <MainLecField name="프로젝트 관리" />
                    </LecMainleft>
                    <LecMainright>
                        <BestUser />
                        <BestLecturer />
                    </LecMainright>
                </LecMain>
            </LecMaindiv>
        </div>
    );
}

export default MainPage;