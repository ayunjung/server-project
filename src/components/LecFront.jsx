import React from 'react'
import styled from 'styled-components'
import BicLecture from '../components/BicLecture'

const LecSmallMain = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    margin: 20px 0 0;
`


const LecFront = () => {

    return (
        <LecSmallMain>
            <BicLecture />
            <BicLecture />
            <BicLecture />
            <BicLecture />
        </LecSmallMain>
    )
}

export default LecFront