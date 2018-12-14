import { createStore, combineReducers } from 'redux';

import ProductsReducer from './reducers/Products'

const allReducers = combineReducers({ProductsReducer})

let store = createStore(allReducers);

export default store