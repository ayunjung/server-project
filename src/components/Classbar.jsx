import React from 'react'
import styled from 'styled-components'

const Classbar = () => {

    const Classbar = styled.div`
        width: 400px;
        display: flex;
    `

    const OtherClass = styled.div`
        width: 100px;
        height: 40px;
        border: 1px solid #29b2ef;
        border-radius: 20px;
        box-sizing: border-box;
        line-height: 40px;
        text-align: center;
    `

    const CurrentClass = styled.div`
        width: 100px;
        height: 20px;
        margin: 10px;
        border: 1px solid #29b2ef;
        border-radius: 20px;
        box-sizing: border-box;
        line-height: 20px;
        text-align: center;
    `

    return (
        <Classbar>
            <OtherClass>이전 강의</OtherClass>
            <CurrentClass>2</CurrentClass>
            <OtherClass>다음 강의</OtherClass>
        </Classbar>
    )
}

export default Classbar