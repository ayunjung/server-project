import React from 'react'
import styled from 'styled-components'

const BestUser = () => {

    const BestPeople = styled.div `
        width: 350px;
        height: 450px;
    `
    const PeopleTitle = styled.div `
        width: 150px;
        height: 40px;
        margin: 5px auto;
        border-radius: 10px;
        line-height: 40px;
        text-align: center;
        background-color: #29b2ef;
        color: #fff;
    `
    const PeopleMain = styled.div `
        width: 350px;
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;
    `
    const Peoplediv = styled.div `
        width: 150px;
        height: 160px;
        border: 1px solid #000;
        margin: 10px auto;
    `
    const PImg = styled.img `
        width: 150px;
        height: 140px;
    `
    const PName = styled.div `
        width: 150px;
        height: 20px;
        line-height: 15px;
        text-align: center;
        color: #000;
    `

    return (
        <BestPeople>
            <PeopleTitle>활동 우수 회원</PeopleTitle>
            <PeopleMain>
                <Peoplediv><PImg src='https://search.pstatic.net/sunny/?src=https%3A%2F%2Fimg.flaticon.com%2Ficons%2Fpng%2F512%2F2858%2F2858123.png%3Fsize%3D1200x630f%26pad%3D10%2C10%2C10%2C10%26ext%3Dpng%26bg%3DFFFFFFFF&type=sc960_832' alt='사람이미지'/><PName>이승은</PName></Peoplediv>
                <Peoplediv><PImg src='https://search.pstatic.net/sunny/?src=https%3A%2F%2Fimg.flaticon.com%2Ficons%2Fpng%2F512%2F2858%2F2858123.png%3Fsize%3D1200x630f%26pad%3D10%2C10%2C10%2C10%26ext%3Dpng%26bg%3DFFFFFFFF&type=sc960_832' alt='사람이미지'/><PName>이승은</PName></Peoplediv>
                <Peoplediv><PImg src='https://search.pstatic.net/sunny/?src=https%3A%2F%2Fimg.flaticon.com%2Ficons%2Fpng%2F512%2F2858%2F2858123.png%3Fsize%3D1200x630f%26pad%3D10%2C10%2C10%2C10%26ext%3Dpng%26bg%3DFFFFFFFF&type=sc960_832' alt='사람이미지'/><PName>이승은</PName></Peoplediv>
                <Peoplediv><PImg src='https://search.pstatic.net/sunny/?src=https%3A%2F%2Fimg.flaticon.com%2Ficons%2Fpng%2F512%2F2858%2F2858123.png%3Fsize%3D1200x630f%26pad%3D10%2C10%2C10%2C10%26ext%3Dpng%26bg%3DFFFFFFFF&type=sc960_832' alt='사람이미지'/><PName>이승은</PName></Peoplediv>
            </PeopleMain>
        </BestPeople>
    )
}

export default BestUser