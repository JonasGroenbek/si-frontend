import React, { useState } from 'react'
import SignUpForm from '../login/SignUpForm'
import LogInForm from '../login/LogInForm'
import styled from 'styled-components'

const FormContainer = styled.div`
  align-self: center;
  margin-top: 100px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Login = props => {
  const [signInEmail, setSignInEmail] = useState('')
  const [signInPassword, setSignInPassword] = useState('')
  const [signUpEmail, setSignUpEmail] = useState('')
  const [signUpName, setSignUpName] = useState('')
  const [signUpPassword, setSignUpPassword] = useState('')
  const [signUpPasswordRepeat, setSignUpPasswordRepeat] = useState('')

  const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,:\s@\"]+(\.[^<>()[\]\\.,:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
  }

  const validatePassword = password => {
    return password.length > 8
  }

  const validateName = () => {
    return true
  }

  const signUpPasswordsMatch = () => {
    return signUpPassword === signUpPasswordRepeat
  }
  return (
    <Container>
      <FormContainer>
        <h2>Log in</h2>
        <LogInForm
          email={signInEmail}
          setEmail={setSignInEmail}
          validateEmail={validateEmail}
          password={signInPassword}
          setPassword={setSignInPassword}
          disableSubmit={() => {
            return !(
              validateEmail(signInEmail) && validatePassword(signInPassword)
            )
          }}
        />
      </FormContainer>
      <FormContainer>
        <h2>Sign up</h2>
        <SignUpForm
          email={signUpEmail}
          setEmail={setSignUpEmail}
          validateEmail={validateEmail}
          password={signUpPassword}
          setPassword={setSignUpPassword}
          validatePassword={validatePassword}
          name={signUpName}
          setName={setSignUpName}
          validateName={validateName}
          repeatPassword={signUpPasswordRepeat}
          setRepeatPassword={setSignUpPasswordRepeat}
          passwordMatches={signUpPasswordsMatch}
          disableSubmit={() => {
            return !(
              validateEmail(signUpEmail) &&
              validatePassword(signUpPassword) &&
              signUpPasswordsMatch() &&
              validateName()
            )
          }}
        />
      </FormContainer>
    </Container>
  )
}

export default Login
