import React from 'react';
import './skill.css';
import s1 from './skill1.png';
import s2 from './skill2.png';
import s3 from './skill3.png';
import s4 from './skill4.png';
import s5 from './skill5.png';
import s6 from './skill6.jpeg';

const SetSkill=()=>{
	return (
			<>
				<center><h2 >SkillSet</h2></center>
				<hr style={{width:'100%'}}></hr>
				<br />
				<div style={{display:'flex',justifyContent:'center',backgroundColor:'white'}} id="imgid">
					
					<ul className="nav flex-column">
						<li className="nav-item"><img src={s1} data-aos-duration="500" data-aos="fade-right" data-aos-once="true" className="img-fluid" /></li>
						<li className="nav-item"><img src={s2} data-aos-duration="700" data-aos="fade-left" data-aos-once="true" className="img-fluid" /></li>
						<li className="nav-item"><img src={s3} data-aos-duration="900" data-aos="fade-right" data-aos-once="true" className="img-fluid" /></li>
					</ul>
					<ul className="nav flex-column">
						<li className="nav-item"><img src={s4} data-aos-duration="1100" data-aos="fade-left" data-aos-once="true" className="img-fluid" /></li>
						<li className="nav-item"><img src={s5} data-aos-duration="1300" data-aos="fade-right" data-aos-once="true" className="img-fluid" /></li>
						<li className="nav-item"><img src={s6} data-aos-duration="1500" data-aos="fade-left" data-aos-once="true" className="img-fluid" /></li>
					</ul>
				</div>
			</>



		);
}
export default SetSkill;