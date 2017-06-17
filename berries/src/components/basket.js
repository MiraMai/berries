import React, { Component } from 'react';
import '../App.css';


function Basket(props) {
    
    let i=0;
	const list = props.productsVariable.map( item => 
        <li id={item.productName + item.price} 
            key={i++}>
            <img className='basketImg' src={item.picture} alt='no image found' />
            <span>{item.productName}, $ {item.price}</span> 
            <button id={item.productName + item.price}
                    className= 'basketBtn'                     
                    onClick={props.handleClickDeleteBasket}> 
                    Delete
            </button>
          </li> 
    );
                                            
	return ( 
             <div className= 'basketPage'>
                <h1 className= 'center'> My basket </h1>
                <ul>{list}</ul>
            </div>                                
          );

                            
}

    
export default Basket;