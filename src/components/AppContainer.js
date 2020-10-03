import React from 'react'
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import Feed from './routes/Feed'
import Login from './routes/Login'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 100px;
`

const AppContainer = () => {
  return (
    <Container>
      <Router>
        <Switch>
          <Link to="/" component={Feed} />
          <Link to="/login" component={Login} />
        </Switch>
      </Router>
    </Container>
  )
}

export default AppContainer
