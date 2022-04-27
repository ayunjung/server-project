import React, { Component } from 'react'
import styled from 'styled-components'

const CommunityElement = styled.div`
    width : 15%;
`
const CommunityContent = styled.div`
    width : 35%;
`
const CommunityList = styled.li`
    display: flex;
    width : 1000px;
    height : 50px;
    border-bottom : 1px solid #999;
    line-height: 50px;
    text-align: center;
`

class C_list extends Component {

    render() {
        return (
            <CommunityList>
                <CommunityElement>{this.props.docnum}</CommunityElement>
                <CommunityElement>{this.props.sort}</CommunityElement>
                <CommunityContent>{this.props.title}</CommunityContent>
                <CommunityElement>{this.props.date}</CommunityElement>
                <CommunityElement>{this.props.writer}</CommunityElement>
                <CommunityElement>{this.props.views}</CommunityElement>
            </CommunityList>
        )
    }
}

export default C_list