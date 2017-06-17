import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../App.css';
import Admin from './admin';
import Basket from './basket';
import History from './history';
import ProductGallery from './product-gallery';
import { actionChangeTab, actionAddProduct, actionDeleteProduct, actionAddToBasket, actionDeleteBasket, actionViewHistory} from '../actions/actions.js';
//  actions

class TabComponent extends Component {
	constructor(props) {
		super(props);
        this.addToBasket=this.addToBasket.bind(this);
        this.handleClickDeleteBasket=this.handleClickDeleteBasket.bind(this);
        this.handleClickHistory = this.handleClickHistory.bind(this)
		this.handleClickAdmin = this.handleClickAdmin.bind(this)
		this.handleClickProductGallery = this.handleClickProductGallery.bind(this)
		this.addproduct=this.addproduct.bind(this);
        this.handleClickDeleteProduct = this.handleClickDeleteProduct.bind(this);
        this.handleClickBasket=this.handleClickBasket.bind(this);

        
	}
	render() {
		let view;
		if( this.props.tab === 1 ) {
            view = <ProductGallery 
                        products={this.props.products} addToBasket={this.addToBasket} 
                    />;
		} else if( this.props.tab === 2 ) {
            view = <Basket  
                        products={this.props.basket} handleClickDeleteBasket={this.handleClickDeleteBasket}
                    />;
		
		} else if( this.props.tab === 3 ) {
			view = <History 
                        history={this.props.history}    
                    />;
		} 
        else if( this.props.tab === 4 ) {
            view = <Admin 
                        products={this.props.products}  
                        addproduct={this.addproduct}   
                        handleClickDeleteProduct={this.handleClickDeleteProduct}/>;
		} 
		return (
			<div className= 'menuTop'>
            <div className='center'>
                <div className='menu' 
                     onClick={this.handleClickProductGallery}>
                     product gallery
                </div>
                <div className='menu'
                     onClick={this.handleClickBasket}>
                     basket  
                </div>
                <div className='menu'
                     onClick={this.handleClickHistory}>
                     history
                </div>
				<div className='menu'
                     onClick={this.handleClickAdmin}>
                     admin
                </div>
			</div>
			<div className="tabbody">
				{view}
			</div>
			<div>
          </div>
		  </div>
		);
	}
	
    handleClickProductGallery(e) {
		this.changeTab(1);
	}
    handleClickBasket(e) {
		this.changeTab(2);
    }
    handleClickHistory(e) {
		this.changeTab(3);
	}
     handleClickAdmin(e) {
		this.changeTab(4);
	}
    
    addToBasket(e){
        let eachProduct = this.props.products;
        function find(productId, value) {
            var i = 0;
            for (var key in eachProduct) {
		    var currentProduct = eachProduct[key];
        
            if (currentProduct[productId] === value) {
		            return i;
		        }
		        i++;
			    }
			   return -1;
              } 
              
        let findId= find('id',e); 
        let productFound = this.props.products[findId];
        let action = actionAddToBasket(productFound.id, productFound.productName, productFound.price, productFound.picture);
        
        this.props.dispatch(action); //we send the package to post office updates state
        this.props.dispatch(actionViewHistory(action));          
        
    }
    
    handleClickDeleteBasket(event) {
        let productId = event.target.id;
        let action = actionDeleteBasket(productId);
        this.props.dispatch( action );
        this.props.dispatch( actionViewHistory(action) );
    }    
    handleClickDeleteProduct(event) {
        let productId = event.target.id;
        let action = actionDeleteProduct(productId);
        this.props.dispatch( action );
        this.props.dispatch( actionViewHistory(action) );
    }
    
    addproduct(name, price, image){
        this.props.dispatch(actionAddProduct(name, price, image)); 
        this.props.dispatch(actionViewHistory(actionAddProduct(name, price, image)));
    }
    
	
	changeTab(tab) {
		let action = actionChangeTab(tab);
		this.props.dispatch(action);
		this.props.dispatch( actionViewHistory(action) );
	}
} // component end

function mapStateToProps(state) {
	
	return {
		tab: state.tab,
        products: state.products,
        productGallery: state.products,
        basket:state.basket,
		history: state.history
		
	}
}

export default connect(mapStateToProps)(TabComponent);


