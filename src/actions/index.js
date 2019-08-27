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

const postsLoaded = (newPosts) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //async operations with dispatch
    dispatch({
      type: 'POSTS_LOADED',
      payload: newPosts
    });
  }
};

const removePost = (newPosts) => {
  return {
    type: 'REMOVE_POST',
    payload: newPosts
  };
};

const addPost = (newPosts, newPost) => {
  return (dispatch, getState, {getFirebase,getFirestore}) => {
    const {id, title, post} = newPost;

    //We're accessing the firestore.
    const firestore = getFirestore();
    firestore.collection("posts").doc(`${id}`).set({
      id,
      title,
      post
    }).then(() => {
      //If data is added successfully to firestore
      dispatch({
        type: 'ADD_POST',
        payload: newPosts
      });
    })

    
  }
};

export {
  inc,
  dec,
  postsLoaded,
  removePost,
  addPost
};  
