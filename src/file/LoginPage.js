import React from 'react'
import styled from 'styled-components'
import Topbar from '../components/Topbar'
import Login from '../components/Login'

function LoginPage() {

    const LoginMain = styled.div`
        width: 1000px;
        margin: 30px auto;
    `
    const LoginForm = styled.div`
        width: 500px;
        margin: 150px auto 0;
    `

    return (
        <LoginMain>
            <Topbar />
            <LoginForm><Login /></LoginForm>
        </LoginMain>
    );
}

export default LoginPage