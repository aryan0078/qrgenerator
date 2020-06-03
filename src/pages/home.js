import React, { Component } from 'react';
import Header from '../components/header'
import {Link, Redirect}  from 'react-router-dom'
export default class Home extends Component {
    constructor(props){
        super(props)
        this.state={logout:false,logout:false}
    }
    logout(){

    }
  render() {
      if(this.state.logout){
          return <Redirect to="/login"/>
      }
    return (
        <>
        <Header right={<button class="btn btn-primary" id="submitbutton" onClick={()=>this.setState({logout:true})}>Logout</button>}/>
      <div>Hello Mr. {localStorage.getItem('name')} </div>
    </>);
  }
}
