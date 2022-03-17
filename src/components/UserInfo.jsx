import React from 'react'
import styled from 'styled-components'

const UserInfo = () => {

    const Maindiv = styled.div`
        display: flex;
    `

    const User = styled.div`
        width: 300px;
        height: 600px;
        border: 1px solid #000;
        box-sizing: border-box;
    `

    const Info = styled.div`
        width: 700px;
        height: 600px;
        border: 1px solid #000;
        box-sizing: border-box;
        padding: 30px;
        font-size: 20px;
    `

    return (
        <Maindiv>
            <User></User>
            <Info>
                <div>이름 : 정아윤</div><br />
                <div>나이 : 23</div>
            </Info>
        </Maindiv>
    )
}

export default UserInfo