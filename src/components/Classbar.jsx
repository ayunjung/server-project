import React from 'react'
import styled from 'styled-components'

const Classbar = () => {

    const Classbar = styled.div`
        width: 400px;
        display: flex;
        margin: 0 auto;
    `

    const OtherClass = styled.div`
        width: 100px;
        height: 40px;
        border-radius: 20px;
        background-color: #e8e8e8;
        box-sizing: border-box;
        line-height: 40px;
        text-align: center;
        font-weight: 600;
    `

    const CurrentClass = styled.div`
        width: 100px;
        height: 20px;
        margin: 10px;
        border-radius: 20px;
        background-color: #3ED6A7;
        box-sizing: border-box;
        line-height: 20px;
        text-align: center;
        color: #fff;
        font-weight: 600;
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