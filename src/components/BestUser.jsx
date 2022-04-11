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
                <Peoplediv><PImg src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png' alt='사람이미지'/><PName>이승은</PName></Peoplediv>
                <Peoplediv><PImg src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png' alt='사람이미지'/><PName>이승은</PName></Peoplediv>
                <Peoplediv><PImg src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png' alt='사람이미지'/><PName>이승은</PName></Peoplediv>
                <Peoplediv><PImg src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png' alt='사람이미지'/><PName>이승은</PName></Peoplediv>
            </PeopleMain>
        </BestPeople>
    )
}

export default BestUser