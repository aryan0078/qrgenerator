import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch,Link}  from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'
import './App.css';
import Register from './pages/register';
import Header from './components/header'
class App extends Component {

  render( ) {
    return (
      <div>
        <Router>
          
          <Fragment>
            <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/home' component={Home}/>
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
