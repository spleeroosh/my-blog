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
    let new_data = [];

    await db.collection('posts').get().then(qs => {
      qs.forEach(doc => new_data.push(doc.data()));
    });

    dispatch({
      type: 'POSTS_LOADED',
      payload: new_data
    });
  };
};

const removePost = (new_posts, removed_post) => {
  return (dispatch) => {
    db.collection('posts')
      .doc(removed_post['id'])
      .delete()
      .then(() => {
        dispatch({
          type: 'REMOVE_POST',
          payload: new_posts
        });
      });
  };
};

const addPost = (old_posts, id, formatted_title, formatted_post) => {
  return (dispatch) => {
    let new_posts,
      new_post = {
        id,
        title: formatted_title,
        content: formatted_post,
        date: new Date()
      };

    new_posts = [
      ...old_posts,
      new_post
    ];
    //We're accessing the firestore
    db.collection('posts').doc(`${id}`).set({
      id,
      title: formatted_title,
      content: formatted_post,
      date: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
      //If data is added successfully to firestore
      dispatch({
        type: 'ADD_POST',
        payload: new_posts
      });
    });


  };
};

const authUser = (email, password) => {
  return (dispatch) => {
    auth.signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        var error_code = error.code;
        var error_message = error.message;
        alert(error_code, error_message);
        // ...
      })
      .then(() => {
        const user = auth.currentUser;

        if (user) {
          const current_user = {
            user_name: user.email,
            id: user.uid
          };

          dispatch({
            type: 'AUTH_USER',
            payload: current_user
          });
        }
      });
  };
};

const signOut = () => {
  return (dispatch) => {
    auth.signOut().then(function () {
      // Sign-out successful.
      dispatch({
        type: 'SIGN_OUT',
        payload: {
          id: null
        }
      });
    }).catch(function (error) {
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
