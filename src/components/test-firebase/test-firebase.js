import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { firebaseConnect, useFirebaseConnect, withFirestore } from 'react-redux-firebase';
import { postsLoaded } from './../../actions';

const TestFirebase = (state) => {
  const store = useSelector(store => store.project.posts);
  const dispatch = useDispatch();
  console.log(state);
  const getData = async () => {

    
    dispatch(postsLoaded(state.firestore));
  }
  return(
    <button className="singout" style={{'marginLeft': '22.5rem'}} onClick={getData}>TEST</button>
  )
}



export default withFirestore(TestFirebase);
