import React from 'react'
import styled from 'styled-components';
import Topmenu from './Topmenu';
import Subjecticon from './Subjecticon';
import Usericon from './Usericon';
import { Link } from 'react-router-dom'

const Topbar = () => {

    const Topbar = styled.div`
        width: 1000px;
        display: flex;
    `
    const Userbtn = styled.div`
        position: absolute;
        right: 30px;
        top: 20px;
    `

  return (
    <Topbar>
        <Subjecticon />
        <Topmenu />
        <Userbtn><Link to="/Mypage" style={{ textDecoration: 'none', color: 'black', display:'block' }}><Usericon /></Link></Userbtn>
    </Topbar>
  )
}

export default Topbar