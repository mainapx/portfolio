import * as React from "react"
import {useRef,useState,useEffect} from 'react';
import './header.css';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';

const Header = (props) => {
  const checkmobile=useRef();
  const [iconState,oldState]=useState({iconStates:'fa fa-bars',displayState:'block'});

  const ResponsiveStyle={color:'white',fontWeight:'bold',backgroundColor:'transparent',borderColor:'transparent',outline:'none'};
  function CheckState(){
    if(iconState.iconStates=='fa fa-bars'||iconState.displayState=="none"){
      oldState({iconStates:'fa fa-close',displayState:'block'});}
      else{
        oldState({iconStates:'fa fa-bars',displayState:'none'});
      }
  }
  function SendLoginData(){
    const n=({
      method:'POST',
      body:JSON.stringify({'username':document.querySelector('input[type=text]').value,'password':document.querySelector('input[type=password]').value}),
      headers:{'Content-Type':'application/json','Origin':'https://limitg.herokuapp.com'}
    });
    async function SendDetail(){
      const p=await fetch("https://limitg.herokuapp.com/user/api/login",n);
      return await p.json();
    }
    SendDetail().then(response=>{
      setTimeout(()=>{
        if(response.status==="OK"){
          localStorage.setItem('name',JSON.parse(response.data).emailid)
          window.location='https://limitg.herokuapp.com/admin'
        }else{
          ReactDOM.render(<div className="alert alert-danger" data-aos="fade-down" 
          data-aos-duration="500"><center>{response.message}</center></div>,document.getElementById('logResp'))
        }},2000);
        
        setTimeout(()=>{ReactDOM.render('',document.getElementById('logResp'))},4000);
    });
  }
  useEffect(()=>{
    if(navigator.userAgent.toLowerCase().match(/iphone|android/g)){
      document.querySelector(".navbar-brand > button").style.color="white";
      document.querySelector(".navbar-brand > button").style.fontWeight="bold";
      document.querySelector(".navbar-brand > button").style.backgroundColor="transparent";
      document.querySelector(".navbar-brand > button").style.outline="none";


      document.querySelector('#first').style.backgroundColor="transparent";
      document.querySelector('#first').style.color="white";

      document.querySelector('#second').style.backgroundColor="transparent";
      document.querySelector('#second').style.color="white";
      
      document.querySelector('#third').style.backgroundColor="transparent";
      document.querySelector('#third').style.color="white";
    }
  },[])
  
  return(
  
        <nav className="navbar fixed-top z-depth-3 p-4" id="mybar" style={{backgroundColor:'#8BD4EA',boxShadow:'2px 2px 2px 0px #444040'}}>
            <div className="navbar-brand">
                <button className="btn btn-default" style={{color:'white'}}>PortFolio</button>
            </div>

              <ul className="nav nav-pills" ref={checkmobile} id="mobileul" >
                <li className="nav-item"><button   onClick={()=>window.scroll({top:1100,behavior:'smooth'})} className="nav-link" id="first" style={ResponsiveStyle}>Skills</button></li>
                <li className="nav-item"><button  onClick={()=>window.scroll({top:0,behavior:'smooth'})} className="nav-link" id="second" style={ResponsiveStyle} >About</button></li>                 
                <li className="nav-item"><button  onClick={()=>window.scroll({top:700,behavior:'smooth'})} style={ResponsiveStyle} to="/" id="third" className="nav-link">Contact</button></li>
                <li className="nav-item"><button  onClick={()=>window.scroll({top:1900,behavior:'smooth'})} className="nav-link" id="second" style={ResponsiveStyle} >Projects</button></li>
                {props.login}
                {props.signup}
                {props.admin}
                {props.close}
              </ul>
                <div id="checklogin" style={{transition:'width 0.3s',boxShadow:'0px 0px 52px 0px black',zIndex:50,height:'1000%',width:0,right:0,backgroundColor:'orange',position:'fixed'}}></div>
                <div className="form-group" id="mgroup">
                  <br /><br /><br />
                  <span id="logResp"></span>
                  <center><h3>Login</h3>
                  <br />
                  <input type='text' className="form-control" placeholder="Username" />
                  <br />
                  <input type='password' className="form-control" placeholder="Password" />
                  <br />
                  <a type='button' className="form-control btn btn-danger" onClick={SendLoginData} style={{color:'white'}}>Login</a></center>
                </div>
          </nav>
    );
}
export default Header
