import React, {useState,useEffect} from 'react'
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
    const [LectureList, setLectureList] = useState([]);
    const [filteredData,setFilteredData] = useState(LectureList);

    useEffect(()=>{
        fetch('http://localhost:3001/readleclist', {
            method: "post",
            headers: {
            "Content-Type": "application/json",
            },
            body : JSON.stringify({
              sort : Lecsort,
            })
        }).then((res)=>
            res.json(),
        ).then(data=>{
            setLectureList(data.data)
            setFilteredData(data.data)})
    },[Lecsort])

    const handleSearch = (e) => {
        let val = e.target.value.toLowerCase();
        let result = [];
        result = LectureList.filter((data) => {
            return data.title.toLowerCase().search(val) !== -1;
        });
        setFilteredData(result);
    }

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
                    <LecSearchbar handleSearch={handleSearch}/>
                    <LecSortList filteredData={filteredData} Lecsort={Lecsort} page={page} setPage={setPage} limit={4}/>
                </LecPageright>
            </LectureMain>
        </div>
    );
}

export default LectureList