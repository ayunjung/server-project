import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Topmenu = () => {

    const Topmenudiv = styled.div`
        display: flex;
        width: 300px;
        height: 30px;
        margin: 10px 0;
    `
    const Innermenudiv = styled.div`
        width: 100px;
        height: 30px;
        padding: 3px;
        text-align: center;
        font-size: 20px;
        font-weight: 900;
    `
    

  return (
      <Topmenudiv>
        <Innermenudiv>
            <Link to="/MainPage" style={{ textDecoration: 'none', color: 'black', display:'block' }}>강의</Link>
        </Innermenudiv>
        <Innermenudiv>
            <Link to="/CommunityPage" style={{ textDecoration: 'none', color: 'black', display:'block' }}>커뮤니티</Link>
        </Innermenudiv>
        <Innermenudiv>
            <Link to="/Question" style={{ textDecoration: 'none', color: 'black', display:'block' }}>Q{'&'}A</Link>
        </Innermenudiv>
      </Topmenudiv>
  )
}

export default Topmenu