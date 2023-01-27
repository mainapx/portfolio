import React,{useState} from 'react';
import {setCheck} from './uu.js';

const SetM=()=>{
	const[a,b]=useState(0)
	return(
			<>
				<setCheck.Consumer>{data=>b(data)}</setCheck.Consumer>
				<span style={{color:'white'}}>{a}</span>
			</>
		);
}
export default SetM;