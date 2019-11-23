import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';

import projectReducer from './reducers/projectReducer';

const store = createStore(projectReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

