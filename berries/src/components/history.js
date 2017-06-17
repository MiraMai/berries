import React from 'react';
import '../App.css';


function History(props) {
	const historyList = 
    props.history.map( (item, index) => 
            <li id={item.type} key={index}>
                {item.type}
            </li> 
     );
	return (
        <div>
            <h1>View history</h1> 
            <ul>{historyList.reverse()}</ul>   
        </div>
    );
}

export default History;