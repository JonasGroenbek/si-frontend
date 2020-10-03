import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Feed from './routes/Feed'
import Login from './routes/Login'
import styled from 'styled-components'
import Header from './universal/Header'

const Container = styled.div`
  margin-top: 120px;
`

const AppContainer = () => {
  return (
    <Container>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Feed />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </Container>
  )
}

export default AppContainer
