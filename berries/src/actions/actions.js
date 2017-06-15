const CHANGE_TAB = 'CHANGE_TAB';
const CLICK_ON_ADD = 'CLICK_ON_ADD';
const UPDATE_BASKET = 'UPDATE_BASKET';
const UPDATE_HISTORY = 'UPDATE_HISTORY';
const VIEW_HISTORY = 'VIEW_HISTORY';
const VIEW_BASKET = 'VIEW_BASKET';
const DELETE_PRODUCT = 'DELETE_PRODUCT';

function actionChangeTab(selectedTab) {
	return {
		type: CHANGE_TAB,
		tab: selectedTab
	};
}

function actionClickOnAdd(id, name, price, image) {
    return {
        type: CLICK_ON_ADD,
        id:price,
        productName: name,
        price:price,
        picture:image
        
    };
}
function actionDeleteProduct (id, name, price, image) {
    return{
        type: DELETE_PRODUCT,
        id: id,
        productName: name,
        price: price,
        picture: image
    };
}


function actionUpdateBasket(product) {
    return {
        type: UPDATE_BASKET,
        product
    };
}

function actionHistory(action) {
	return {
		type: UPDATE_HISTORY,
		action
	};
}

function actionShowBasket(showBasket){
    return{
        type: VIEW_BASKET,
        showBasket
    };
}

function actionShowHistory(showHistory) {
	return {
		type: VIEW_HISTORY,
		showHistory
	};
}



export { CHANGE_TAB, actionChangeTab, CLICK_ON_ADD, actionClickOnAdd, UPDATE_BASKET, actionUpdateBasket, UPDATE_HISTORY, actionHistory,VIEW_HISTORY,actionShowHistory, VIEW_BASKET,actionShowBasket, DELETE_PRODUCT, actionDeleteProduct };