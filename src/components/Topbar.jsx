import React from 'react'
import styled from 'styled-components';
import Topmenu from './Topmenu';
import Subjecticon from './Subjecticon';
import Usericon from './Usericon';

const TopbarDiv = styled.div`
  width: 1200px;
  display: flex;
  margin: 30px auto 20px;
`
const Userbtn = styled.div`
  position: absolute;
  right: 30px;
  top: 20px;
`

const Topbar = () => {

  return (
    <TopbarDiv>
        <Subjecticon />
        <Topmenu />
        <Userbtn><Usericon /></Userbtn>
    </TopbarDiv>
  )
}

export default Topbar