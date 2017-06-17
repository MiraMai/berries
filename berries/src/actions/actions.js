const CHANGE_TAB = 'CHANGE_TAB';
const ADD_PRODUCT = 'ADD_PRODUCT';
const DELETE_PRODUCT='DELETE_PRODUCT';
const ADD_TO_BASKET='ADD_TO_BASKET';
const DELETE_BASKET='DELETE_BASKET';
const VIEW_HISTORY = 'VIEW_HISTORY';

function actionChangeTab(selectedTab) {
	return {
		type: CHANGE_TAB,
		tab: selectedTab
	};
}

function actionAddProduct(name, price, image) {
	return {
		type : ADD_PRODUCT,
        id: name + price + image,
		productName: name,
        price: price,
        picture: image
	};
}

function actionDeleteProduct(id) {
	return {
		type: DELETE_PRODUCT,
        id: id
	};
}

function actionAddToBasket(id,name, price,image) {
	return {
		type: ADD_TO_BASKET,
        id: id,
		productName: name,
        price: price,
        picture: image
	};
}

function actionDeleteBasket(id) {
	return {
		type: DELETE_BASKET,
        id: id
	};
}

function actionViewHistory(action) {
	return {
		type: VIEW_HISTORY,
		action
	};
}


export { CHANGE_TAB, actionChangeTab, ADD_PRODUCT, actionAddProduct, DELETE_PRODUCT, actionDeleteProduct, ADD_TO_BASKET, actionAddToBasket, DELETE_BASKET, actionDeleteBasket, VIEW_HISTORY, actionViewHistory };



