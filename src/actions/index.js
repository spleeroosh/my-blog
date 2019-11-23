import { db, auth, database } from './../../src/firebase';

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
  return async (dispatch, newState) => {
    let newData = [];
    await db.collection('posts').get().then(qs => {
      qs.forEach(doc => newData.push(doc.data()));
    });

    dispatch({
      type: 'POSTS_LOADED',
      payload: newData
    });
  }     
};

const removePost = (newPosts, removedPost) => {
  return (dispatch, newState) => {
    db.collection("posts")
             .doc(removedPost['id'])
             .delete()
             .then(() => {
                dispatch({
                  type: 'REMOVE_POST',
                  payload: newPosts
                })
              })
  }
};

const addPost = (newPosts, newPost) => {
  return (dispatch, getState) => {
    const {id, title, content} = newPost;

    //We're accessing the firestore
    db.collection("posts").doc(`${id}`).set({
      id,
      title,
      content
    }).then(() => {
      //If data is added successfully to firestore
      dispatch({
        type: 'ADD_POST',
        payload: newPosts
      });
    })

    
  }
};

const authUser = (email, password) => {
  return (dispatch, getState) => {
    auth.signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      // ...
    })
    .then(() => {
      const user = auth.currentUser;
      const currentUser = {
        userName: user.email,
        id: user.uid
      }
      
      dispatch({
        type: 'AUTH_USER',
        payload: currentUser
      })
    });
  }
};

const signOut = () => {
  return (dispatch) => {
    auth.signOut().then(function() {
      // Sign-out successful.
      dispatch({
        type: 'AUTH_USER',
        payload: null
      })
    }).catch(function(error) {
      // An error happened.
    });
  }
}

export {
  inc,
  dec,
  postsLoaded,
  removePost,
  addPost,
  authUser,
  signOut
};  
