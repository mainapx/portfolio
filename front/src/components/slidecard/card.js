import React from 'react';
import AOS from 'aos';
import aboutGif from './about.gif';
import './card.css';

const Card =()=>{
	AOS.init();
	return(
			<>
				<div className="card"  data-aos-once="true" data-aos-duration="800" data-aos="fade-left">
					<div className="card-header">
						<h4 style={{color:'black'}}><center>About Me</center></h4>
					</div>
					<div className="card-body" style={{display:'flex'}}>
						<center><h4 style={{lineHeight:'60px'}}>Hello, I am Tekchand From Delhi with fresh talent Looking for Jobs in Market I have Completed Masters(MCA) From MDU University(Rohtak) And Also Complete BCA Fom MDU University(Rohtak)<br />
							<hr style={{width:'100%',color:'white',border:'2px solid white'}}></hr>
							
							<center>Projects</center>
							<br />
							<ul style={{float:'left',left:0 }}>
								<li><h5>Covid19Tracker</h5></li>
								<li><h5>ChatClone</h5></li>
							</ul>
						</h4></center>
						<img src={aboutGif} className="img-fluid" />
					</div>
				</div>
			</>
		)
}
export default Card;
