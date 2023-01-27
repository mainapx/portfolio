import React,{useState} from 'react';
import {setContext} from './test.js';


function Another(props){
	return(
			<setContext.Consumer>{
				data=>data==="black"?<MyText color={'white'} />:<MyText color={'black'} />
				}
			</setContext.Consumer>
		);

}
export {Another}
const MyText=(props)=>{
	const [p,k]=useState('');
	return(
				<>
					<span style={{color:props.color}}>helloworld how areyou tell me immedtely first of al you shoul fin dyouself </span>
				</>
		);
}
export {MyText};