import React from 'react'
import styled from 'styled-components'
import Topbar from '../components/Topbar'
import PostView from '../components/PostView'



function PostPage() {

    const Top = styled.div`
        width: 1200px;
        margin: 30px auto;
    `
    const PostViewdiv = styled.div`
        width: 1000px;
        margin: 0 auto;
    `

    return (
        <div>
            <Top><Topbar /></Top>
            <PostViewdiv>
                <PostView />
            </PostViewdiv>
        </div>
    );
}

export default PostPage;