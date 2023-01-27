import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './test.sass';
import {Link} from 'react-router-dom';
import {CheckTest} from './test1.js';
import {Another,MyText} from './text.js';

const setContext=React.createContext()

const Handler=()=>{
	const [p,l]=useState('hacked');
	const [t,k]=useState(0);

	const h=(<form method="POST" action="test.php">
				<input type="text" placeholder="Enter the username" />
			</form>);
	
	function tests(){
		const u=(
				<setContext.Provider value={'black'}>
					<Another />
					<CheckTest />
				</setContext.Provider>
			);
		ReactDOM.render(u,document.getElementById("check"));
		return null;
		}
	function update(){
		const km=(
			<setContext.Provider value={t} >
				<CheckTest />
			</setContext.Provider>
		);
		ReactDOM.render(km,document.getElementById('ss'));
		k(p+1);
	}
	return(
			<>
				<div className="nav navbar-nav fixed-top">
					<div className="navbar-brand">
						<h4>Helloworld</h4>
					</div>
					<ul className="nav flex-column">
						<li className="nav-item"><button className="nav-link">GotoAdmin</button></li>
					</ul>
					<Link onClick={tests}>Click</Link>
					<div id="check"><MyText /><CheckTest /></div>
					<button onClick={update}>send update</button>
					<div id="ss"></div>
				</div>
			</>
		);
}
export {setContext,Handler};
