import React from 'react'
import './css/login.css'
import {Link}  from 'react-router-dom'
import {Form,Button} from 'react-bootstrap'
import auth from '../api/auth'
class Login extends React.Component {
constructor(props){
  super(props)
  this.state={email:"",password:""}
  this.login=this.login.bind(this)
}
async login(){
  var res=await fetch('http://grgenback.herokuapp.com/userauth/login/',{
            method:"POST",
            body:"email=test&password=1a2b3c4d"
        })
        var data =await res.json()
        console.log(data)
}
    render() {
        return (
            <div id="main-holder-l">
                <div id="login-holder-l">
                <div id="form">
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1-l" aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1-l" placeholder="Password"/>
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