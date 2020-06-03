import React from 'react'
import './css/register.css'
import {Link}  from 'react-router-dom'
class Register extends React.Component {
constructor(props){
    super(props)
    this.state={language:"Language",region:"Region"};
this.register=this.register.bind(this)
}
async register(){
    var res=await fetch('http://grgenback.herokuapp.com/userauth/register/',{
              method:"POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                      
            },
              body:"email=test@gmail.com&password=1a2b3c4d"
          })
          var data =await res.json()
          console.log(data)
  }
         
render() {
        return (
            <div id="main-holder">
            <div id="login-holder">
            <div id="form">
              <label >Register</label>
            <div class="form-group" >

<input type="text" class="form-control" id="example-r"  placeholder="First Name"/>

</div>
<div class="form-group mb-3" >

<input type="text" class="form-control" id="example-r"  placeholder="Last Name"/>

</div>
<div class="form-group">

<input type="email" class="form-control" id="example-r" aria-describedby="emailHelp" placeholder="Enter email"/>

</div>
<div class="form-group">

<input type="password" class="form-control" id="example-r" placeholder="Password"/>
</div>
<div class="form-group">
<div class="dropdown" id="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {this.state.language}
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id="dropdownMenuButton" >
    <a class="dropdown-item"  style={{color:'white'}} id="dropitem" value={this.state.language} onClick={(e)=>{this.setState({language:e.currentTarget.textContent})}}>Hindi</a>
    <a class="dropdown-item"  style={{color:'white'}} id="dropitem" value={this.state.language} onClick={(e)=>{this.setState({language:e.currentTarget.textContent})}}>English</a>
    <a class="dropdown-item"  style={{color:'white'}} id="dropitem" value={this.state.language} onClick={(e)=>{this.setState({language:e.currentTarget.textContent})}}>Persian</a>
  </div>
</div>
</div>
<div class="form-group">
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   {this.state.region}
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id="dropdownMenuButton">
    <a class="dropdown-item"  style={{color:'white'}} id="dropitem" value={this.state.region} onClick={(e)=>{this.setState({region:e.currentTarget.textContent})}}>US</a>
    <a class="dropdown-item"  style={{color:'white'}} id="dropitem" value={this.state.region} onClick={(e)=>{this.setState({region:e.currentTarget.textContent})}}>Indian</a>
    <a class="dropdown-item"  style={{color:'white'}} id="dropitem" value={this.state.region} onClick={(e)=>{this.setState({region:e.currentTarget.textContent})}}>England</a>
  </div>
</div>
</div>
<button class="btn btn-primary" id="submitbutton">Submit</button>

<Link to="/login"><button class="btn btn-primary" id="submitbutton">Login</button></Link>
</div>
            </div>
        </div>
        )
    }
}

export default Register;