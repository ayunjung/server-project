import React from 'react'
import Topbar from '../components/Topbar';
import UserInfo from '../components/UserInfo';



function Mypage( {LoginEmail} ) {

    return (
        <div>
            <Topbar />
            <UserInfo LoginEmail={LoginEmail} />
        </div>
    );
}

export default Mypage;