import { combineReducers } from 'redux';
//Let's import firestoreReducer
import { firestoreReducer } from 'redux-firestore';

import projectReducer from './projectReducer';

const rootReducer = combineReducers({
  project: projectReducer,
  //With firestore we access firestoreReducer.
  firestore: firestoreReducer
});

export default rootReducer;