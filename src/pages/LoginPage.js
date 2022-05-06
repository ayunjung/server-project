import React from 'react'
import styled from 'styled-components'
import Topbar from '../components/Topbar'
import Login from '../components/Login'

const LoginMain = styled.div`
    width: 1000px;
    margin: 0 auto;
`
const LoginForm = styled.div`
    width: 500px;
    margin: 150px auto 0;
`

function LoginPage() {
    
    return (
        <div>
            <Topbar />
            <LoginMain>
                <LoginForm><Login /></LoginForm>
            </LoginMain>
        </div>
    );
}

export default LoginPage