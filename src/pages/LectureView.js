import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Topbar from '../components/Topbar'
import LecInfoHead from '../components/LecInfoHead';
import LecInfoTime from '../components/LecInfoTime';
import SmallLecList from '../components/SmallLecList';
import {useParams} from 'react-router-dom'

const LecView = styled.div`
    width: 700px;
    margin: 0 auto;
`
const LecViewdiv = styled.div`
    width: 100%;
    padding: 20px 0;
`

function LectureView() {

    const { lecnum } = useParams();

    const [LecData, setLecData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/readlecinfo', {
            method: "post",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ulecnum: lecnum,
            })
        }).then((res)=>
            res.json(),
        ).then(data=>{setLecData(data.data)})
    },[lecnum])

    return (
        <div>
            <Topbar />
            <LecView>
                <LecViewdiv><LecInfoHead LecData={LecData}/></LecViewdiv>
                <LecViewdiv><LecInfoTime /></LecViewdiv>
                <LecViewdiv><SmallLecList /></LecViewdiv>
            </LecView>
        </div>
    );
}

export default LectureView;