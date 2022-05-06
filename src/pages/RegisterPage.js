import React from 'react'
import styled from 'styled-components'
import Topbar from '../components/Topbar'
import Register from '../components/Register';

const RegisterMain = styled.div`
    width: 1000px;
    margin: 0 auto;
`
const RegisterForm = styled.div`
    width: 400px;
    margin: 50px auto;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 20px;
`

function RegisterPage() {

    return (
        <div>
            <Topbar />
            <RegisterMain>
                <RegisterForm><Register /></RegisterForm>
            </RegisterMain>
        </div>
    );
}

export default RegisterPage