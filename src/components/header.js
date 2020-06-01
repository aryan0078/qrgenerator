import React, { Component } from 'react';
import './css/header.css'
import logo from '../pages/assets/images/logo1.png'
import {Link}  from 'react-router-dom'
export default class Header extends Component {
  render() {
    return (
      <div id="homemaincontainer">

<nav class="navbar navbar-light bg-dark">
  <a class="navbar-brand" href="#">
   <Link to="/"> <img src={logo} width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy"/></Link>
    <label id="brandname">Qrgen</label>
  </a>
  <Link to="/login"><button class="btn btn-danger">Signup</button></Link>
</nav>
      </div>
    );
  }
}
