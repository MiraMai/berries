import React from 'react';

var product = {name:undefined, price:undefined, image:undefined}

function Admin(props) {
	 
    let i=0;
	const productsList = props.productsVariable.map( item => 
        <div className= 'products'
             id={item.productName + item.price} 
             key={i++}>
            <img className='galleryImg' src={item.picture} alt='no image found' /> 
            <br />                                
            <span>{item.productName}</span> 
            <br />
            <span>$ {item.price}</span> 
            <br/> 
            <button id={item.productName+item.price}
                    onClick={props.handleClickDeleteProduct}> 
                    Delete
         </button>           
      </div>
    );
    
	return (
        <div className= 'page'>
            <h1 className= 'center'> Admin page</h1>
            
        
            <div className="form center">
                <input onChange={productName} 
                       type="text" 
                       placeholder="product name.." />
                <input onChange={productPrice} 
                       type="number"  
                       placeholder="product price.." />
                <input onChange={productImg} 
                       type="text" placeholder="image URL.." />
                <button onClick={addProduct}>
                    Add This Product
                </button> 
            </div> 
            <ul>
                {productsList}
            </ul>
        </div>
);
    
    
    function productName(event){
        let nameOfNewProduct = event.target.value;
        product.name = nameOfNewProduct;
        
    } 
    function productPrice(event){
        let priceOfNewProduct = event.target.value;
        product.price = priceOfNewProduct;
        
    } 
     function productImg(event){
        let imgOfNewProduct = event.target.value;
        product.image = imgOfNewProduct;
        
    } 
    function addProduct(){                                   
        props.addproduct(product.name, product.price, product.image);
      
    
    };
    
    
}

export default Admin;

  