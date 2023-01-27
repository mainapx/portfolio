import React from 'react';
import p1 from './p1.png';
import './project.css';
import AOS from 'aos';
import p2 from './p2.png';
import p3 from './p3.png';

const Handler=()=>{
	AOS.init()
	return(
			<React.Fragment>
				<div className="jumbotron" style={{backgroundColor:'white',boxShadow:'2px 2px 2px 0px #444040'}}>
					<center><h1>Projects</h1></center>
					<hr style={{width:'100%'}}></hr>

					<br />
					<div className="row" id="prorow">
						<div className="col-lg-1"></div>
							<div className="col-lg-5">
								<div className="jumbotron" type="button" onClick={()=>window.location='https://serene-cove-82899.herokuapp.com/login'} data-aos-duration="300" data-aos-once="true" data-aos="fade-right" style={{padding:'0px',backgroundColor:'white'}}>
									<h3>Todo App</h3>
									<img src={p1} className="img-fluid" />
								</div>
								<br />
								<div className="jumbotron" type="button" onClick={()=>window.location='https://vilmil.herokuapp.com/'} data-aos-duration="300" data-aos-once="true" type="button" data-aos="fade-left" style={{padding:'0px',backgroundColor:'white'}}>
									<h3>HTMLApp</h3>
									<img src={p2} className="img-fluid" />
								</div>
							</div>
						<div className="col-lg-5">
							<div className="jumbotron" type="button" onClick={()=>window.location='https://evening-citadel-36388.herokuapp.com/login'} data-aos-duration="300" data-aos-once="true" data-aos="fade-right" style={{padding:'0px',backgroundColor:'white'}}>
									<h3>Customer Complaint Admin Dashboard</h3>
								<img src={p3} className="img-fluid" />
							</div>
							<br />
							<div className="jumbotron"  data-aos-duration="300" data-aos-once="true" data-aos="fade-left" style={{padding:'0px',backgroundColor:'white'}}>
									<h3>ChatApplication</h3>
								<img src={p3} className="img-fluid" />
							</div>
						</div>
					</div>
				</div>

			</React.Fragment>
		);
}
export default Handler;