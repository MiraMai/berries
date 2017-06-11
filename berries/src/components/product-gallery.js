import React, { Component } from 'react';
import '../App.css';
import ListView from './ListView';
import Picture from './picture';
import History from './history';
import {actionChangeTab, actionClickOnAdd, actionHistory} from '../actions/actions.js';
import {connect} from 'react-redux';



{/*class ProductGallery extends Component {
  render() {
    return (
     
        <div className="product-gallery">
          <p>I'm the gallery</p>
          {this.props.berryType.map((berryType, i)=> <Image {...this.props} key={i} i={i} berryType={berryType} />)}
        </div>
     
    );
  }
}

export default ProductGallery;*/}


class TabComponent extends Component {
	constructor(props) {
		super(props);
		this.handleClickProduct = this.handleClickProduct.bind(this);
		this.handleClickPicture = this.handleClickPicture.bind(this);
		this.handleClickAddButton = this.handleClickAddButton.bind(this)
		this.handleClickHistory = this.handleClickHistory.bind(this)
	}
	render() {
		let view;
		if( this.props.tab === 1 ) {
			view = <ListView items={['blueberries', 'rasberries', 'strawberries', 'redcurrants', 'blackcurrants', 'lingonberries', 'blackberries', 'cherries']} />;
		} else if( this.props.tab === 2 ) {
			view = <Picture image={this.props.imageUrl} />;
		} else {
			view = <History history={this.props.history} />;
		} 
		return (
			<div className="App">
			<div>
				<button onClick={this.handleClickProduct}>Products</button>
				<button onClick={this.handleClickPicture}>pic</button>
				<button onClick={this.handleClickHistory}>histhistory</button>
				
			</div>
			<div>
				{view}
			</div>
			<div>
				<button onClick={this.handleClickAddButton}>Lägg till tal</button>
			</div>
		  </div>
		);
	}
	handleClickAddButton(e) {
		let action = actionClickOnAdd(42);
		this.props.dispatch( action );
		this.props.dispatch( actionHistory(action) );
	}
	handleClickProduct(e) {
		this.changeTab(1);
	}
	handleClickPicture(e) {
		this.changeTab(3);
	}
	handleClickHistory(e) {
		this.changeTab(4);
	}
	changeTab(tab) {
		let action = actionChangeTab(tab);
		this.props.dispatch(action);
		this.props.dispatch( actionHistory(action) );
	}
}

function mapStateToProps(state) {
	console.log('state:', state);
	return {
		tab: state.tab,
		imageUrl: state.imageUrl,
		history: state.history
	}
}

export default connect(mapStateToProps)(TabComponent);
