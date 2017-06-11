    import { CHANGE_TAB, CLICK_ON_ADD, VIEW_HISTORY } from '../actions/actions.js';



    function tabReducer(state = 1, action) {
	switch( action.type ) {
		case CHANGE_TAB:
			return action.tab;
		default:
			return state;
	}
}

    function productsReducer(state = [], action) {
        switch(action.type) {
            case 'CLICK_ON_ADD':
                return //show in basket
                
            default: 
                return state;
        console.log(state, action);
                          }
    }

    function pictureReducer(state = '', action) {
	return state;
}

   function historyReducer(state = [], action) {
        switch(action.type) {
            case 'VIEW_HISTORY':
                return //show all the actions
                
            default: 
                return state;
        console.log(state, action);
                          }
    }



    export { tabReducer, productsReducer, pictureReducer, historyReducer };