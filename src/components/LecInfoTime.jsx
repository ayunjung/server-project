import React, {useEffect} from 'react'
import styled from 'styled-components'

const SLecInfoTime = styled.div`
    width : 614px;
    padding : 0 20px;
`

const LecNum = styled.div`
    font-size : 27px;
    font-weight : bold;
`

const LecTime = styled.div`
    font-size : 27px;
    font-weight : bold;
`

const LecRunPerDiv = styled.div`
    margin : 10px 0;
    font-size : 20px;
    font-weight : bold;
    display : flex;
`

const Persqr = styled.div`
    width : 350px;
    background : lightgray;
    margin : 0 20px;
    border-radius : 10px;
`

const LecInfoTime = () => {

    useEffect(()=>{
        fetch('http://localhost:3001/lelisten', {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: "1",
                content : 'gd',
                views: 'gd',
                data : 'gd'
            }),
        }).then((res)=>
            res.json()
        ).then(data=>{console.log(data.success);
        if((data.success) === '1'){
            alert('수강한 강좌 .');
        }})
    }, []);


    return (
        <SLecInfoTime>
            <LecNum>총 강좌수 : 6강</LecNum>
            <LecTime>강의 시간 : 151시간</LecTime>
            <LecRunPerDiv>
                <div>강의 진행율</div>
                <Persqr></Persqr>
                <div>100%</div>
            </LecRunPerDiv>
        </SLecInfoTime>
    )
}

export default LecInfoTime