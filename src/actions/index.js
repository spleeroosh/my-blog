import { db, auth, firebase } from './../../src/firebase';

const inc = () => {
  return {
    type: 'INC'
  };
};

const dec = () => {
  return {
    type: 'DEC'
  };
};

const postsLoaded = () => {
  return async (dispatch) => {
    let newData = [];

    await db.collection('posts').get().then(qs => {
      qs.forEach(doc => newData.push(doc.data()));
    });

    dispatch({
      type: 'POSTS_LOADED',
      payload: newData
    });
  };     
};

const removePost = (newPosts, removedPost) => {
  return (dispatch) => {
    db.collection('posts')
      .doc(removedPost['id'])
      .delete()
      .then(() => {
        dispatch({
          type: 'REMOVE_POST',
          payload: newPosts
        });
      });
  };
};

const addPost = (oldPosts, id, formattedTitle, formattedPost) => {
  return (dispatch) => {
    let newPosts,
      newPost = {
        id,
        title: formattedTitle,
        content: formattedPost,
        date: new Date()
      };
    
    newPosts = [
      ...oldPosts,
      newPost
    ];
    //We're accessing the firestore
    db.collection('posts').doc(`${id}`).set({
      id,
      title: formattedTitle,
      content: formattedPost,
      date: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
      //If data is added successfully to firestore
      dispatch({
        type: 'ADD_POST',
        payload: newPosts
      });
    });

    
  };
};

const authUser = (email, password) => {
  return (dispatch) => {
    auth.signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorCode, errorMessage);
      // ...
    })
      .then(() => {
        const user = auth.currentUser;

        if(user) {
          const currentUser = {
            userName: user.email,
            id: user.uid
          };
        
          dispatch({
            type: 'AUTH_USER',
            payload: currentUser
          });
        }
      });
  };
};

const signOut = () => {
  return (dispatch) => {
    auth.signOut().then(function() {
      // Sign-out successful.
      dispatch({
        type: 'SIGN_OUT',
        payload: {
          id: null
        }
      });
    }).catch(function(error) {
      // An error happened.
      throw new Error(error);
    });
  };
};

export {
  inc,
  dec,
  postsLoaded,
  removePost,
  addPost,
  authUser,
  signOut
};  
