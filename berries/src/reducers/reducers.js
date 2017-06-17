import { CHANGE_TAB, ADD_PRODUCT, DELETE_PRODUCT, ADD_TO_BASKET, DELETE_BASKET, VIEW_HISTORY } from '../actions/actions.js';



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
        case ADD_PRODUCT:
			return [...state, action];
        case DELETE_PRODUCT:
            console.log(action.id);
			let newList =   
            state.filter(function(item) {
                console.log('inuti filter', item, action);
			return item.id !== action.id;
		});
        console.log('newList after filter', newList, action);    
		    return newList;
        default:
            return state;
		}
}

function basketReducer(state = [], action) {
	switch(action.type ) {
		case ADD_TO_BASKET:
          return [...state, action];
        case DELETE_BASKET:
            let newList=
                state.filter(function(item){
                 return item.id !== action.id;    
        });
            return newList;
		default:
			return state;
	}
}


function viewHistoryReducer(state = [], action) {
	switch( action.type ) {
		case VIEW_HISTORY:
			return [...state, action.action];
		default:
			return state;
	}
}


export { tabReducer,productReducer, basketReducer, viewHistoryReducer };



