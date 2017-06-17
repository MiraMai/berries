import React, { Component } from 'react';
import '../App.css';


function Basket(props) {
    
    let i=0;
	const list = props.products.map( item => 
        <li id={item.productName + item.price + item.picture} 
            key={i++}>
            <img className='basketImg' src={item.picture} alt='no image found' />
            <span>{item.productName}, $ {item.price}</span> 
            <button id={item.productName + item.price + item.picture}
                    className= 'basketBtn'
                    onClick={props.handleClickDeleteBasket}> 
                    Delete
            </button>
          </li> 
    );
    
    let totalAmount = 0;
        for (i=0; i<props.products.length; i++ ) {
            totalAmount = totalAmount + props.products[i].price;
        }
                                            
	return ( 
             <div className= 'basketPage'>
                <h1 className= 'center'> My basket </h1>
                <ul>{list}</ul>
                <br/>
                <br/>
                <h4> Total amount: ${totalAmount} </h4>
            </div>                                
          );

                            
}

    
export default Basket;