import React from 'react';

var items = {}

function ListView(props) {
	let i=0;
	const list = props.productsVariable.map( x => 
        <li id={x.productName + x.price} key={i++}>
            <img className="images" src={x.picture} alt={x.productName} />                                 <br />   
            {x.productName}
            <br />
            price: {x.price}
            <br />
            <button>Add to basket</button>
        </li>
    )
    return (
		<ul>{list}</ul>
	);
}
    
export default ListView;