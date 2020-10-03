import { TextField, Button } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`

const Login = props => {
  const {
    email,
    setEmail,
    validateEmail,
    password,
    setPassword,
    disableSubmit
  } = props

  return (
    <Form>
      <TextField
        error={validateEmail()}
        onChange={e => {
          setEmail(e.target.value)
        }}
        id="standard-error-helper-text"
        label="Email"
        value={email}
        helperText="Incorrect email"
      />
      <TextField
        error={false}
        id="standard-error-helper-text"
        label="Password"
        type="password"
        value={password}
        onChange={e => {
          setPassword(e.target.value)
        }}
        helperText="Password must be atleast 8 characters long"
      />
      <Button disabled={disableSubmit()}>Log in</Button>
    </Form>
  )
}

export default Login
