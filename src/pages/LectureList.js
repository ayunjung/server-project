import React, {useState} from 'react'
import styled from 'styled-components'
import Topbar from '../components/Topbar'
import LectureField from '../components/LectureField'
import LecSearchbar from '../components/LecSearchbar'
import LecWeb from '../components/LecWeb'
import LecFront from '../components/LecFront'
import LecBack from '../components/LecBack'
import LecProgram from '../components/LecProgram'
import LecGame from '../components/LecGame'
import LecProject from '../components/LecProject'

const LectureMain = styled.div`
    width: 1000px;
    margin: 0 auto;
    display: flex;
`
const LecPageleft = styled.div`
    width: 20%;
    margin: 0 10px;
`
const LecPageright = styled.div`
    width: 80%;
    margin: 0 10px;
`

function LectureList() {

    const [Lecsort, setLecsort] = useState("웹개발");
    const [page, setPage] = useState(1);

    const onLecsortHandler = (e) => {
        setLecsort(e.target.value)
    }

    return (
        <div>
            <Topbar />
            <LectureMain>
                <LecPageleft>
                    <LectureField Lecsort={Lecsort} LecsortHandler={onLecsortHandler}/>
                </LecPageleft>
                <LecPageright>
                    <LecSearchbar />
                    {Lecsort === "웹개발" ? <LecWeb /> : null}
                    {Lecsort === "프론트엔드" ? <LecFront page={page} setPage={setPage} limit={4}/> : null}
                    {Lecsort === "백엔드" ? <LecBack /> : null}
                    {Lecsort === "프로그래밍 언어" ? <LecProgram /> : null}
                    {Lecsort === "게임 만들기" ? <LecGame /> : null}
                    {Lecsort === "프로젝트 관리" ? <LecProject /> : null}
                </LecPageright>
            </LectureMain>
        </div>
    );
}

export default LectureList