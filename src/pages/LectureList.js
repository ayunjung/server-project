import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Topbar from '../components/Topbar'
import LectureField from '../components/LectureField'
import LecSearchbar from '../components/LecSearchbar'
import LecSortList from '../components/LecSortList'

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

    const { sort } = useParams();

    const [Lecsort, setLecsort] = useState(sort);
    const [page, setPage] = useState(1);

    const onLecsortHandler = (e) => {
        setLecsort(e.target.value)
    }

    return (
        <div>
            <Topbar />
            <LectureMain>
                <LecPageleft>
                    <LectureField sort={sort} Lecsort={Lecsort} LecsortHandler={onLecsortHandler}/>
                </LecPageleft>
                <LecPageright>
                    <LecSearchbar />
                    <LecSortList Lecsort={Lecsort} page={page} setPage={setPage} limit={4}/>
                </LecPageright>
            </LectureMain>
        </div>
    );
}

export default LectureList