// import React from 'react'
// import styled from 'styled-components'
// import Topbar from '../components/Topbar';
// import UserInfo from '../components/UserInfo';
// import Usericon from '../components/Usericon';



// function Mypage() {

//     const Mypagediv = styled.div`
//         width: 1200px;
//         display: flex;
//         padding: 10px;
//         margin: 20px auto;
//     `

//     const Mypageleft = styled.div`
//         width: 85%;
//     `
//     const Mypageright = styled.div`
//         width: 10%;
//     `
//     const Iconlabel = styled.div`
//         margin-top: 5px;
//         text-align: center;
//         font-weight: 600;
//     `

//     return (
//         <Mypagediv>
//             <Mypageleft><Topbar /><UserInfo /></Mypageleft>
//             <Mypageright><Usericon /><Iconlabel>마이페이지</Iconlabel></Mypageright>
//         </Mypagediv>
//     );
// }

// export default Mypage;


import React from 'react'
import styled from 'styled-components'
import Topbar from '../components/Topbar';
import UserInfo from '../components/UserInfo';



function Mypage() {

    const Top = styled.div`
        width: 1200px;
        margin: 30px auto;
    `
    const Mypagediv = styled.div`
        width: 1000px;
        margin: 0 auto;
    `

    return (
        <div>
            <Top><Topbar /></Top>
            <Mypagediv>
                <UserInfo />
            </Mypagediv>
        </div>
    );
}

export default Mypage;