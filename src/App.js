import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch}  from 'react-router-dom'
import Login from './pages/login'

import './App.css';
import Register from './pages/register';

class App extends Component {

  render( ) {
    return (
      <div>
        <Router>
          <Fragment>
            <Switch>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/signup' component={Register}/>
            </Switch>
          </Fragment>
        </Router>
      </div>
    )
  }
}

export default App;
