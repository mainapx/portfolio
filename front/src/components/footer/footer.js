import React,{useEffect} from 'react';
import './footer.css';

const Footer =()=>{
	useEffect(()=>{
		if(navigator.userAgent.toLowerCase().match(/iphone|android/g)){
				document.getElementById('l1').style.backgroundColor="transparent";
				document.getElementById('l1').style.outline="none";
				document.getElementById('l1').style.border="none";

				document.getElementById('l2').style.backgroundColor="transparent";
				document.getElementById('l2').style.outline="none";
				document.getElementById('l2').style.border="none";

				document.getElementById('l3').style.backgroundColor="transparent";
				document.getElementById('l3').style.outline="none";
				document.getElementById('l3').style.border="none";
		}
	},[])
	return(
			<>

				<footer id="testing" className="jumbotron">
					<center><h4 style={{color:'white'}}>CopyRight (2019-2023) All Right Reserved.</h4></center>
					<ul className="nav" id="footer">
						<li className="nav-item" id="l1"><button style={{backgroundColor:'transparent',outline:'none',border:'none'}} ><i className="fa fa-github"></i></button></li>
						<li className="nav-item" id="l2"><button style={{backgroundColor:'transparent',outline:'none',border:'none'}}><i className="fa fa-amazon"></i></button></li>
						<li className="nav-item" id="l3"><button style={{backgroundColor:'transparent',outline:'none',border:'none'}}><i className="fa fa-instagram"></i></button></li>
					</ul>
				</footer>
			</>
		);
}
export default Footer;