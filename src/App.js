import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch,Link}  from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'
import './App.css';
import Register from './pages/register';
import Header from './components/header'
import Banner from './pages/qr-on-pages/banners';
import Books from './pages/qr-on-pages/books';
import Bottles from './pages/qr-on-pages/bottles';
import Business from './pages/qr-on-pages/business-cards';
import Display from './pages/qr-on-pages/display';
import Flyers from './pages/qr-on-pages/flyers';
import Food from './pages/qr-on-pages/food-packaging';
import Label from './pages/qr-on-pages/labels';
import Poster from './pages/qr-on-pages/posters';
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
              <Route exact path='/qr-on/banner' component={Banner}/>
              <Route exact path='/qr-on/book' component={Books}/>
              <Route exact path='/qr-on/bottles' component={Bottles}/>
              <Route exact path='/qr-on/business-cards' component={Business}/>
              <Route exact path='/qr-on/display' component={Display}/>
              <Route exact path='/qr-on/flyers' component={Flyers}/>
              <Route exact path='/qr-on/food-packaging' component={Food}/>
              <Route exact path='/qr-on/labels' component={Label}/>
              <Route exact path='/qr-on/posters' component={Poster}/>
            </Switch>
          </Fragment>
        </Router>
      </div>
    )
  }
}

export default App;
