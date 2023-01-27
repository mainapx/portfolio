import Header from '../components/header/header.js';
import React,{useEffect} from 'react';
import ReactDOM from 'react-dom';
import Handler from '../components/project.js';
import Register from '../components/signup/signup.js';
import Contact from '../components/contact/contact.js';
import Card from '../components/slidecard/card.js';
import Footer from '../components/footer/footer.js';
import SetSkill from '../components/skills/skills.js';
import Avatar from '@material-ui/core/Avatar';

const IndexPage=()=>{
  useEffect(()=>{
    localStorage.clear();
  },[])
  const ResponsiveStyle={color:'white',fontWeight:'bold',backgroundColor:'transparent',outline:'none',border:'none'};
  const ResponsiveStyle1={color:'white',fontWeight:'bold',outline:'none',border:'none'};

	  function HideBar(){
	    document.querySelector('#checklogin').style.width="0";
	    document.querySelector('.fa-close').style.display="none"
	    document.querySelector('#mgroup').style.display="none";
  	}
  	function ShowModal(){
    	ReactDOM.render(<Register />,document.getElementById('register'))
  	}

  	function ShowLogin(){
    if(!navigator.userAgent.toLowerCase().match(/android|iphone|iPhone|ipad|kindle/g)){
      document.getElementById('checklogin').style.width="400px";
      document.querySelector('.fa-close').style.display="block";
      document.querySelector('#mgroup').style.display="block";
    }else{document.getElementById('checklogin').style.width="100%";
      document.querySelector('.fa-close').style.fontSize="10vw";
      document.querySelector('.fa-close').style.zIndex="100";

      document.getElementById('checklogin').style.backgroundColor="orange";
      document.querySelector('.fa-close').style.display="block";
      document.querySelector('#mgroup').style.display="block";
      document.querySelector('#mobileul li:last-child').style.display="block";
      document.querySelector('center > h3').style.fontSize="8vw";      
      document.querySelector('#mgroup> center >input[type=text]').style.fontSize="6vw";
      document.querySelector('#mgroup> center >input[type=password]').style.fontSize="6vw";
      document.querySelector('#mgroup').style.lineHeight="8vw";
        document.querySelector('#mgroup').style.position="8vw";
      document.querySelector('#mgroup').style.top="8vw";

      document.querySelector('.btn-danger').style.fontSize="8vw";
    }
  }

	return(
			<React.Fragment>
				<div id="register"></div>
				<Header 
					login={<li className="nav-item"><button style={ResponsiveStyle} to="#" onClick={ShowLogin} className="nav-link">Login</button></li>}
                    signup={<li className="nav-item"><a  type="button" style={ResponsiveStyle1} to="#" data-toggle="modal" data-target="#mymodal" onClick={ShowModal} className="nav-link active">Try Once</a></li>}
	                close={<li classname="nav-item"><a type="button"  className="btn btn-default"><i  onClick={HideBar} className='fa fa-close' id="closebtn"></i></a></li>}

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
export default IndexPage;