import React, { Component } from 'react';
import logo from '../assets/images/logo1.png'
import './css/header.css'
export default class Header extends Component {
  render() {
    return (
       
        <nav class="navbar navbar-light bg-dark">
          <a class="navbar-brand" style={{color:'white'}}>
            <img src={logo} width="30" height="30" class="d-inline-block align-top" alt=""/>
            Qrgen
          </a>
       <div id="rightelement">
           {this.props.right}
           </div>
        </nav>
    );
  }
}

