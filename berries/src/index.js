import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import {tabReducer, productsReducer, pictureReducer, historyReducer} from './reducers/reducers.js';


let initialState = {
    tab: 1,
    basket: null,
    imageUrl: 'http://www.gexing.me/uploads/allimg/141016/23040SH4-0.jpg',
    history: [{type: 'TEST'}]
     
}

let rootReducer = combineReducers({
	tab: tabReducer,
    basket: productsReducer,
	imageUrl: pictureReducer,
	history: historyReducer
});
const store = createStore(rootReducer, initialState);


ReactDOM.render(
    <Provider store={store}><App /></Provider>, document.getElementById('root')
);
registerServiceWorker();

