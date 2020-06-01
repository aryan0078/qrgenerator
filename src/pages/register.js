import React from 'react'
import './css/register.css'
import {Link}  from 'react-router-dom'
import app from '../api/firebase'
class Register extends React.Component {
constructor(props){
    super(props)
    this.state={email:"",password:"",fullname:"",phone:""}
    this.register=this.register.bind(this)
}
async register(){
  
  }
    render() {
        return (
            <div id="main-holder">
            <div id="login-holder">
            <div id="form">
<div class="form-group">
<label for="exampleInputEmail1">Email address</label>
<input type="email" class="form-control" id="exampleInputEmail1-r" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}}/>

</div>
<div class="form-group">
<label for="exampleInputPassword1">Password</label>
<input type="password" class="form-control" id="exampleInputPassword1-r" placeholder="Password" value={this.state.password} onChange={(e)=>{this.setState({password:e.target.value})}}/>
</div>
<div class="form-group">
<label >Full Name</label>
<input type="text" class="form-control" id="exampleInputPhone1-r" placeholder="Full Name" value={this.state.fullname} onChange={(e)=>{this.setState({fullname:e.target.value})}}/>
</div>
<div class="form-group">
<label >Phone</label>
<input type="text" class="form-control" id="exampleInputPhone1-r" placeholder="Phone" value={this.state.phone} onChange={(e)=>{this.setState({phone:e.target.value})}}/>
</div>

<button class="btn btn-primary" id="submitbutton"  onClick={this.register}>Submit</button>
<br/>
<Link to="/login"><button class="btn btn-primary" id="submitbutton">Login</button></Link>
</div>
            </div>
        </div>
        )
    }
}

export default Register;