import React from 'react'
import styled from 'styled-components';

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
            <div>강의</div>
        </Innermenudiv>
        <Innermenudiv>
            <div>커뮤니티</div>
        </Innermenudiv>
        <Innermenudiv>
            <div>Q{'&'}A</div>
        </Innermenudiv>
      </Topmenudiv>
  )
}

export default Topmenu