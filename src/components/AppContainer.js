import React from 'react'
//import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Cms routes

const AppContainer = props => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={<div>/</div>} />
          <Route path="/x" component={<div>x</div>} />
        </Switch>
      </Router>
    </div>
  )
}

export default AppContainer
