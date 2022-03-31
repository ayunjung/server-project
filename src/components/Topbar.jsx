import React from 'react'
import styled from 'styled-components';
import Topmenu from './Topmenu';
import Subjecticon from './Subjecticon';

const Topbar = () => {

    const Topbar = styled.div`
        display: flex;
    `

  return (
    <Topbar>
        <Subjecticon />
        <Topmenu />
    </Topbar>
  )
}

export default Topbar