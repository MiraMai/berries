    import { CHANGE_TAB, CLICK_ON_ADD, UPDATE_BASKET,  VIEW_HISTORY } from '../actions/actions.js';



    function tabReducer(state = 1, action) {
	switch( action.type ) {
		case CHANGE_TAB:
			return action.tab;
		default:
			return state;
	}
}

    function productReducer(state = [], action) {
	switch( action.type ) {
		case CLICK_ON_ADD:
			return [...state, action];
		default:
			return state;
	}
}

    function basketReducer(state = [], action) {
        switch(action.type) {
            case UPDATE_BASKET:
                return //show in basket
                
            default: 
                return state;
        console.log(state, action);
                          }
    }


   function historyReducer(state = [], action) {
        switch(action.type) {
            case VIEW_HISTORY:
                return //show all the actions
                
            default: 
                return state;
        console.log(state, action);
                          }
    }



    export { tabReducer, productReducer, basketReducer, historyReducer };