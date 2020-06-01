import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch}  from 'react-router-dom'
import Login from './pages/login'
import Header from "./components/header"
import './App.css';
import Register from './pages/register';
import Home from './pages/home';

class App extends Component {

  render( ) {
    return (
      <div>
       
        <Router>
        <Header/>
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
