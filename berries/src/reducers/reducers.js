    import { CHANGE_TAB, CLICK_ON_ADD, UPDATE_BASKET,  UPDATE_HISTORY,VIEW_HISTORY, VIEW_BASKET, DELETE_PRODUCT } from '../actions/actions.js';



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
            case DELETE_PRODUCT:
                let newList =
                    state.filter(function(element) {
                    return element.id !== action.id;
                });
                console.log('must see');
                console.log(state);
                return newList;
            default: 
                return state; 
                          }
    }    
/*default:
                console.log('must see');
                console.log(state);
                return state;
        }
    }
    
    function deleteReducer (state = [], action) {
        switch(action.type) {
                case DELETE_PRODUCT:
                let remove =
                    [...state, action].filter(function(element) {
                    return element.id !== action.id;
                });
                console.log('must see');
                console.log(state);
                return remove;
            default: 
                return state; 
                          }
    }*/

    function basketReducer(state = [], action) {
        switch(action.type) {
            case UPDATE_BASKET:
                return [...state, action.product];
            default:
                console.log(state, action);
                return state;

        }
    }


   function historyReducer(state = [], action) {
        switch(action.type) {
            case UPDATE_HISTORY:
                return //show all the actions
                
            default:
                console.log(state, action);
                return state;

        }
    }

    function changeViewReducer(state={}, action){
        switch(action.type){
            case VIEW_BASKET:
                return {...state, showBasket: action.showBasket};
            case VIEW_HISTORY:
                return {...state, showHistory: action.showHistory};
            default:
                return state;
        }
    }



    export { tabReducer, productReducer, basketReducer, historyReducer, changeViewReducer };