import React from 'react'
import './css/login.css'
import {Link,Redirect}  from 'react-router-dom'
import {Form,Button} from 'react-bootstrap'
import Header from '../components/header'
import auth from '../api/auth'
import Modal from 'react-modal'
class Login extends React.Component {
constructor(props){
  super(props)
  this.state={email:"",password:"",loading:false}
  this.login=this.login.bind(this)
}
async login(){
  this.setState({loading:true})
  var res=await fetch('https://qrgenback.herokuapp.com/login/',{
            method:"POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
                    
          },
            body:"email="+this.state.email+"&password="+this.state.password
        })

        var data =await res.json()
        if(data.msg==undefined){localStorage.setItem('email');localStorage.setItem('name');this.setState({loading:false,redirect:true})}
        else{alert(data.msg)
          this.setState({loading:false})}
        
        

        
}
    render() {
      if(this.state.redirect)
{
  return <Redirect to="/home"/>
}        return (
          <>
                
                <Modal
            isOpen={this.state.loading}
            style={{content:{width:"20%",height:"25%",backgroundColor:"#F6F9F6",top:"45%",left:"45%",borderRadius:'40px'}}}
            contentLabel="Example Modal"
          >
              <img src="https://i.pinimg.com/originals/22/ca/c0/22cac0191a9db1b9e55b81fb1afab6b4.gif" style={{width:'100%',height:'100%'}}/>
          </Modal>
        <Header right={<Link to="/signup"><button class="btn btn-primary" id="submitbutton">Register</button></Link>}/>
            <div id="main-holder-l">
                <div id="login-holder-l">
                <div id="form">
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1-l" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1-l" placeholder="Password" value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})}/>
  </div>
  <button class="btn btn-primary" id="submitbutton" onClick={this.login}>Submit</button>
  <br/>
  <Link to="/signup"><button class="btn btn-primary" id="submitbutton">Signup</button></Link>
</div>
                </div>
            </div></>
        )
    }
}

export default Login;