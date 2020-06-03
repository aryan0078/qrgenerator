import React from 'react'
import './css/register.css'
import {Link,Redirect}  from 'react-router-dom'
import LoadingScreen from '../components/loading'
import Header from '../components/header'
import Modal from 'react-modal'
class Register extends React.Component {
constructor(props){
    super(props)
    this.state={redirect:false,loading:false,language:"Language",region:"Region",email:"",password:"",firstname:"",lastname:""};
this.register=this.register.bind(this)
}
async register(){
    var res=await fetch('https://qrgenback.herokuapp.com/register/',{
              method:"POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                      
            },
              body:"email="+this.state.email+"&password="+this.state.password+"&region="+this.state.region+"&language="+this.state.language+"&firstname="+this.state.firstname+"&lastname="+this.state.lastname
          })
          var data=await res.json()
          if(data.msg==undefined){localStorage.setItem('email',this.state.email);localStorage.setItem('name',this.state.name);this.setState({loading:false,redirect:true})}
        else{alert(data.msg);
          this.setState({loading:false})}
          
  }
 
         
render() {
  if(this.state.redirect){
    return <Redirect to="/home"/>
  }
        return (
          <>
          <Header right={<Link to="/login"><button class="btn btn-primary" id="submitbutton">Login</button></Link>}/>
            <div id="main-holder">
            <Modal
            isOpen={this.state.loading}
            style={{content:{width:"20%",height:"25%",backgroundColor:"#F6F9F6",top:"45%",left:"45%",borderRadius:'40px'}}}
            contentLabel="Example Modal"
          >
              <img src="https://i.pinimg.com/originals/22/ca/c0/22cac0191a9db1b9e55b81fb1afab6b4.gif" style={{width:'100%',height:'100%'}}/>
          </Modal>
            <div id="login-holder">
            <div id="form">
              <label >Register</label>
            <div class="form-group" >

<input type="text" class="form-control" id="example-r"  placeholder="First Name" value={this.state.firstname} onChange={(e)=>this.setState({firstname:e.target.value})}/>

</div>
<div class="form-group mb-3" >

<input type="text" class="form-control" id="example-r"  placeholder="Last Name" value={this.state.lastname} onChange={(e)=>this.setState({lastname:e.target.value})}/>

</div>
<div class="form-group">

<input type="email" class="form-control" id="example-r" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}/>

</div>
<div class="form-group">

<input type="password" class="form-control" id="example-r" placeholder="Password" value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})}/>
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
<button class="btn btn-primary" id="submitbutton" onClick={this.register}>Submit</button>

<Link to="/login"><button class="btn btn-primary" id="submitbutton">Login</button></Link>
</div>
            </div>
        </div>
        </>
        )
    }
}

export default Register;