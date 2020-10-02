import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Feed from './routes/Feed'
import Login from './routes/Login'

const AppContainer = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Feed} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  )
}

export default AppContainer
