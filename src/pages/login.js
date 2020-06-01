import React from 'react'
import './css/login.css'
import {Link}  from 'react-router-dom'
import {Form,Button} from 'react-bootstrap'
import app from '../api/firebase'
class Login extends React.Component {
constructor(props){
  super(props)
  this.state={email:"",password:""}
  this.login=this.login.bind(this)
}
async login(){
 
}
    render() {
        return (
            <div id="main-holder-l">
                <div id="login-holder-l">
                <div id="form">
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1-l" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}}/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1-l" placeholder="Password" value={this.state.password} onChange={(e)=>{this.setState({password:e.target.value})}}/>
  </div>
  <button class="btn btn-primary" id="submitbutton" onClick={this.login}>Submit</button>
  <br/>
  <Link to="/signup"><button class="btn btn-primary" id="submitbutton">Signup</button></Link>
</div>
                </div>
            </div>
        )
    }
}

export default Login;