import React from 'react'
import styled from 'styled-components'
import Topbar from '../components/Topbar';
import BestUser from '../components/BestUser';
import BestLecturer from '../components/BestLecturer';
import MainLecField from '../components/MainLecField';

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

function MainPage() {

    return (
        <div>
            <Topbar />
            <LecMaindiv>
                <LecMain>
                    <LecMainleft>
                        <MainLecField name="웹개발" />
                        <MainLecField name="프론트엔드" />
                        <MainLecField name="백엔드" />
                        <MainLecField name="프로그래밍 언어"  />
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