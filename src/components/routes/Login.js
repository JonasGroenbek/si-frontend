import React, { useState } from 'react'
import SignUpForm from '../login/SignUpForm'
import LogInForm from '../login/LogInForm'
import Header from '../universal/Header'

const Login = props => {
  const [signInEmail, setSignInEmail] = useState('')
  const [signInPassword, setSignInPassword] = useState('')
  const [signUpEmail, setSignUpEmail] = useState('')
  const [signUpPassword, setSignUpPassword] = useState('')
  const [signUpPasswordRepeat, setSignUpPasswordRepeat] = useState('')

  return (
    <div>
      <Header />
      <h2>Log ind!</h2>
      <LogInForm />
      <h2>Skriv dig op!</h2>
      <form>
        <SignUpForm />
      </form>
    </div>
  )
}

export default Login
