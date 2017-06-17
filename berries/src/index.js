import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App'; 
import {tabReducer,productReducer, basketReducer, viewHistoryReducer} from './reducers/reducers.js';


let initialState = {
	tab: 1, 
	products:[
              {
                id:'rasberries4https://www.organicfacts.net/wp-content/uploads/2013/05/Raspberry11.jpg',
                productName: 'rasberries',  
                picture: 'https://www.organicfacts.net/wp-content/uploads/2013/05/Raspberry11.jpg', 
                price: 4
              },
              {
                id:'blueberries3https://cdn.authoritynutrition.com/wp-content/uploads/2015/02/three-blueberries.jpg',
                productName: 'blueberries',  
                picture: 'https://cdn.authoritynutrition.com/wp-content/uploads/2015/02/three-blueberries.jpg', 
                price: 3
              },
              {
                id:'strawberries2http://i.dailymail.co.uk/i/pix/2015/05/18/00/24BA71B400000578-0-image-a-24_1431906929382.jpg',
                productName: 'strawberries',  
                picture: 'http://i.dailymail.co.uk/i/pix/2015/05/18/00/24BA71B400000578-0-image-a-24_1431906929382.jpg', 
                price: 2
              },
            ], 
    
      basket:[],
      history: []
};


let rootReducer = combineReducers({
	tab: tabReducer,
	products: productReducer,
    productGallery: basketReducer,
    basket: basketReducer,
    history: viewHistoryReducer
});
const store = createStore(rootReducer, initialState);


ReactDOM.render(
    <Provider store={store}><App /></Provider>, document.getElementById('root')
);
registerServiceWorker();
