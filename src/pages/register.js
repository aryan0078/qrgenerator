import React from 'react'
import './css/register.css'
import {Link}  from 'react-router-dom'
class Register extends React.Component {

    render() {
        return (
            <div id="main-holder">
            <div id="login-holder">
            <form id="form">
<div class="form-group">
<label for="exampleInputEmail1">Email address</label>
<input type="email" class="form-control" id="exampleInputEmail1-r" aria-describedby="emailHelp" placeholder="Enter email"/>

</div>
<div class="form-group">
<label for="exampleInputPassword1">Password</label>
<input type="password" class="form-control" id="exampleInputPassword1-r" placeholder="Password"/>
</div>
<div class="form-group">
<label >Phone</label>
<input type="text" class="form-control" id="exampleInputPhone1-r" placeholder="Phone"/>
</div>
<button class="btn btn-primary" id="submitbutton">Submit</button>
<br/>
<Link to="/login"><button class="btn btn-primary" id="submitbutton">Login</button></Link>
</form>
            </div>
        </div>
        )
    }
}

export default Register;