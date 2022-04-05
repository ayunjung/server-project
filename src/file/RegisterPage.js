import React from 'react'
import styled from 'styled-components'
import Topbar from '../components/Topbar'
import Register from '../components/Register';

function RegisterPage() {

    const Top = styled.div`
        width: 1200px;
        margin: 30px auto;
    `
    const RegisterMain = styled.div`
        width: 1000px;
        margin: 0 auto;
    `
    const RegisterForm = styled.div`
        width: 400px;
        margin: 60px auto;
        border: 1px solid gray;
        border-radius: 5px;
        padding: 30px;
    `

    return (
        <div>
            <Top><Topbar /></Top>
            <RegisterMain>
                <RegisterForm><Register /></RegisterForm>
            </RegisterMain>
        </div>
    );
}

export default RegisterPage