import { TextField, Button } from '@material-ui/core'
import React from 'react'

const Login = props => {
  return (
    <div>
      <h2>Skriv dig op!</h2>
      <form>
        <TextField />
        <TextField />
        <TextField />
        <Button></Button>
      </form>
    </div>
  )
}

export default Login
