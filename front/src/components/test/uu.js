import React,{useState} from 'react';
import SetM from './tt.js';
import ReactDOM from 'react-dom';

 const setCheck=React.createContext()

const NewTesting=()=>{
	const[a,b]=useState(0)
	function setT(){
		const h=(
				<setCheck.Provider value={a}>
					<SetM />
				</setCheck.Provider>
			);
		ReactDOM.render(h,document.getElementById('test'));
		b(a+1);
	}
	return(
			
			<>
				<button onClick={setT}>clickehre</button>
				<div id="test"></div>				
			</>
		);
}
export {NewTesting,setCheck}