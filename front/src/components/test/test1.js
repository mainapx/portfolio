import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import {setContext} from './test.js';

function CheckTest(){
	return(
			<>
			<setContext.Consumer>
			{data=>data==="black"?<NewText color={'yellow'} />:<NewText color={'white'} />}
			</setContext.Consumer>
			</>
		);
}
export {CheckTest}

const NewText=(props)=>{
	const [p,y]=useState(0);
	return(
				<>
					<div className="alert alert-danger" style={{backgroundColor:props.color}}></div>
					<h1>{props.value}</h1>
				</>
		);
}
export {NewText};