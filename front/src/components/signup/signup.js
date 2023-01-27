import React,{useState,useEffect} from 'react'
import AOS from 'aos';
import {Redirect} from 'react-router';
import AdminHandler from '../../container/admin.js';
import './signup.css';
import ReactDOM from 'react-dom';

const Register=()=>{
	AOS.init();
	const [classstate,setclasstate]=useState('btn btn-default btn-primary')
	const [getState,setStateHandler]=useState({firstname:'',username:'',password:''});
	const [htmlstate,sethtmlstate]=useState('Create New Account')
	function SendNew(e){
		if(getState.firstname&&getState.username&&getState.password!=''){
		setclasstate('btn btn-default btn-primary disabled')
		sethtmlstate(<div className="spinner-border" style={{color:'white'}}></div>)
		const n=({
			method:'POST',
			body:JSON.stringify(getState),
			headers:{'Content-Type':'application/json','Origin':'https://limitg.herokuapp.com'}
		});
		async function SendDetail(){
			const p=await fetch("https://limitg.herokuapp.com/user/api/new",n);
			return await p.json();
		}
		SendDetail().then(response=>{
			setTimeout(()=>{
				if(response.status==="OK"){
					localStorage.setItem('Name',response.Name)
					window.location='https://limitg.herokuapp.com/admin'
				}else{
					sethtmlstate('Create New Account')
					setclasstate("btn btn-default btn-primary")
					ReactDOM.render(<div className="alert alert-danger" data-aos="fade-down" 
					data-aos-duration="500"><center>{response.message}</center></div>,document.getElementById('resp'))
				}},2000);
				
				setTimeout(()=>{ReactDOM.render('',document.getElementById('resp'))},4000);
		});
	}
	}
	useEffect(()=>{
		if(navigator.userAgent.toLowerCase().match(/iphone|android/g)){
			document.querySelector('.modal-content').style.position="relative";
			document.querySelector('.modal-content').style.right="55%";
			document.querySelector('.modal-content').style.width="105vw";
			document.querySelector('.modal-content').style.top="50vw";
			document.querySelector('.modal-content').style.lineHeight="8vw";
			document.querySelector('#resp').style.fontSize="5vw"
		}
	},[])
	return(		
				<React.Fragment>
					<div className="modal fade" id="mymodal" role="dialog">
						<div className="modal-dialog" role="document">
							<div className="modal-content">
								<div className="modal-header">
									<div className="modal-title"><center>Signup</center></div>
										<a type="button" data-dismiss="modal"><i className="fa fa-close"></i></a>
									</div>
									<div id="resp"></div>

								<div className="modal-body">
									<div className="form-group">
										<input type="text" value={getState.firstname} onChange={(e)=>setStateHandler(previous=>({...previous,firstname:e.target.value}))} className="form-control" placeholder="Firstname" />
										<br />
										<input type="text" value={getState.username} onChange={(e)=>setStateHandler(previous=>({...previous,username:e.target.value}))} className="form-control" placeholder="example@mail.com" />
										<br />
										<input type="password"  value={getState.password} onChange={(e)=>setStateHandler(previous=>({...previous,password:e.target.value}))} className="form-control" placeholder="Password" />
										<br />										
										<a type="button"  onClick={SendNew} className={classstate} id="signbtn">{htmlstate} </a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</React.Fragment>
		);
}
export default Register;