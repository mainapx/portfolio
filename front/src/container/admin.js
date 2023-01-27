import Header from '../components/header/header.js';
import React from 'react';
import Contact from '../components/contact/contact.js';
import {Redirect} from 'react-router';
import Card from '../components/slidecard/card.js';
import Footer from '../components/footer/footer.js';
import Handler from '../components/project.js';
import SetSkill from '../components/skills/skills.js';
import Avatar from '@material-ui/core/Avatar';

const AdminHandler=(props)=>{
	  const ResponsiveStyle={color:'white',fontWeight:'bold',backgroundColor:'transparent',border:'none',outline:'none'};
	  function SendLogout(){
	  	const h=({
	  		method:'POST',
	  		body:JSON.stringify({'name':localStorage.getItem('name')}),
	  		headers:{'Content-Type':'application/json'}
	  	});
	  	async function SetLogout(){
	  		const w=await fetch("https://limitg.herokuapp.com/user/api/logout",h);
	  		return await w;
	  	}	
	  	SetLogout().then(response=>{
	  		if(response.status===302){
	  			window.location="https://limitg.herokuapp.com/"
	  		}
	  	})
	  }
	return(
			<React.Fragment>
				<div id="register"></div>
				<Header 
					admin={<li className="nav-item"><button  type="button" style={ResponsiveStyle} onClick={SendLogout} data-toggle="tooltip" data-placement="top" title="Logout" className="nav-link">
						<i className="fa fa-user" id="adminuser">
						<span id="localadminitem">{localStorage.getItem('name')}</span>
						</i>
						</button></li>
					}
				/>		
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<Card />
				<br />
				<Contact />
				<SetSkill />
				<br />
				<Handler />
				<Footer />
			</React.Fragment>

		);
}
export default AdminHandler;