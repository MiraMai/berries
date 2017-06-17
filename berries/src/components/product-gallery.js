import React from 'react';

function ProductGallery(props) {
    
    let i=0;
	const list = props.products.map( item => 
        <div className= 'products'
             id={item.productName + item.price + item.picture} 
             key={i++}>
            <img className='galleryImg' src={item.picture} alt='no image found' /> 
            <br />                                
            <span>{item.productName}</span> 
            <br />
            <span>$ {item.price}</span> 
            <br/>                                
            <button id= {item.productName + item.price + item.picture}
                    onClick={addToBasketShop}> 
                Add to your basket
            </button>
        </div> 
   );
                                            
	return ( 
        <div className= 'page'>
            <h1 className= 'center'> Find your berry </h1>
            <ul>
                {list}
            </ul>
            
            </div>                                
          );

          

  function addToBasketShop (event){
        
    props.addToBasket(event.target.id);
   
    }                                          
}
                                            
export default ProductGallery;