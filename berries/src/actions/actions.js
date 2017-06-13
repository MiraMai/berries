const CHANGE_TAB = 'CHANGE_TAB';
const CLICK_ON_ADD = 'CLICK_ON_ADD';
const UPDATE_BASKET = 'UPDATE_BASKET';
const VIEW_HISTORY = 'VIEW_HISTORY';

function actionChangeTab(selectedTab) {
	return {
		type: CHANGE_TAB,
		tab: selectedTab
	}
}

function actionClickOnAdd(product) {
    return {
        type: CLICK_ON_ADD,
        product
    }
}

function actionUpdateBasket(product) {
    return {
        type: UPDATE_BASKET,
        product
    }
}

function actionHistory(action) {
	return {
		type: VIEW_HISTORY,
		action
	}
}

export { CHANGE_TAB, actionChangeTab, CLICK_ON_ADD, actionClickOnAdd, UPDATE_BASKET, actionUpdateBasket, VIEW_HISTORY, actionHistory };