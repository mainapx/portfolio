import React from 'react';
import './contact.css';
const Contact=()=>{
	return(
			<React.Fragment>
				<hr style={{width:'100%',color:'white'}}></hr>
				<div className="jumbotron" id="cjumbo" style={{justifyContent:'center',backgroundColor:'white'}}>
						<center><h3>Contact</h3></center>
						<hr style={{width:'100%'}}></hr>
						<br />
							<div className="flexering" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
								<ul className="nav flex-column">
									<li className="nav-item"><h5 className="nav-link"><b>New Delhi near Aggarwal sweets</b></h5></li>
									<li className="nav-item"><h5 className="nav-link"><b>+91 84787867,+915678678758</b></h5></li>
									<li className="nav-item"><h5 className="nav-link"><b>tekchandkumar2444@gmail.com</b></h5></li>
								</ul>
								<ul className="nav flex-column" id="contacticon">
									<li className="nav-item"><i  id="first"  className="nav-link fa fa-home"></i></li>
									<li className="nav-item"><i id="first"  className="nav-link fa fa-phone"></i></li>
									<li className="nav-item"><i id="first"  className="nav-link fa fa-envelope"></i></li>
								</ul>
							</div>
						</div>
			</React.Fragment>
		);
}
export default Contact;