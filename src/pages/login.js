import React from 'react'
import './css/login.css'
import {Link}  from 'react-router-dom'
import {Form,Button} from 'react-bootstrap'
class Login extends React.Component {

    render() {
        return (
            <div id="main-holder-l">
                <div id="login-holder-l">
                <form id="form">
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1-l" aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1-l" placeholder="Password"/>
  </div>
  <button class="btn btn-primary" id="submitbutton">Submit</button>
  <br/>
  <Link to="/signup"><button class="btn btn-primary" id="submitbutton">Signup</button></Link>
</form>
                </div>
            </div>
        )
    }
}

export default Login;