import "./styles.css";
import React,{useState} from 'react';

function getWarningList() {
  return new Promise((resolve) => {
    setTimeout(() => {

    	 /*
    	axios.post(`${URL}api/auth/signin-user`,data)
    	.then(function (response) {}).
    	.catch(function (error) {});
		*/
     	 resolve(["Warning 1", "Warning 2","Warning 3","Warning 4","Warning 5","Warning 6"])
    
    }, 500)
  })
}

export default function Warning(){

	const [WarinigList, setWarinigList] = useState([]);

	getWarningList().then(d => {
		setWarinigList(d);
	})
	
	const List = WarinigList.map(function(item, i){
  			return <div id="item">{item}</div>})

	return(

		<div id="warning-list">
			{List}
		</div>

	);
} 