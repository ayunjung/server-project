import React from 'react'
import styled from 'styled-components'
import Topbar from '../components/Topbar'
import Login from '../components/Login'

function LoginPage() {

    const Top = styled.div`
        width: 1200px;
        margin: 30px auto;
    `
    const LoginMain = styled.form`
        width: 1000px;
        margin: 0 auto;
    `
    const LoginForm = styled.div`
        width: 500px;
        margin: 150px auto 0;
    `


    return (
        <div>
            <Top><Topbar /></Top>
            <LoginMain>
                <LoginForm><Login /></LoginForm>
            </LoginMain>
        </div>
    );
}

export default LoginPage