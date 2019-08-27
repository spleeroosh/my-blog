import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

//for firebase connection
import {reactReduxFirebase,getFirebase} from 'react-redux-firebase';
import {reduxFirestore,getFirestore} from 'redux-firestore';

import firebaseConfig from './firebase';

import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, compose(
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore}))),
    reactReduxFirebase(firebaseConfig),
    reduxFirestore(firebaseConfig)
));

export default store;

