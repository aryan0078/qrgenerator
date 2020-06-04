import React, { Component } from 'react';
import Header from '../components/header'
import {Link, Redirect}  from 'react-router-dom'
import ImageLoader from 'react-image-file';
import './css/home.css'
export default class Home extends Component {
    constructor(props){
        super(props)
        this.getqr=this.getqr.bind(this)
        this.state={logout:false,logout:false,url:'',qr:""}
    }

    async getqr(){
      var res=await fetch('https://qrgenback.herokuapp.com/gen/',{
        method:"POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
                
      },
        body:"url="+this.state.url
    })
      var res=await res.blob()
      console.log(res)
      this.setState({qr: URL.createObjectURL(res)})
    }
  render() {
      if(this.state.logout){
          return <Redirect to="/login"/>
      }
    return (
        <>
        <Header right={<button class="btn btn-primary" id="submitbutton" onClick={()=>this.setState({logout:true})}>Logout</button>}/>
      <div id="cardcontainer">
       
      <div class="card" style={{width:"18rem"}} id="qrcard">
      <img class="card-img-top" src={this.state.qr} alt=""/> 
  
  <div class="card-body">
  <input id="urlinput" placeholder="Enter your url here" value={this.state.url} onChange={(e)=>this.setState({url:e.target.value})}></input>
<button type="button" class="btn btn-primary" onClick={this.getqr} id="genbtn">Generate</button>
  </div>
</div>
      </div>
    </>);
  }
}


