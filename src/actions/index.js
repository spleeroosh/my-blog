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
  return {
    type: 'POSTS_LOADED',
    payload: newPosts
  }
};

const removePost = (newPosts, removedPost, firestore) => {
  return (dispatch, newState) => {
    firestore.collection("posts")
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

const addPost = (newPosts, newPost, firestore) => {
  return (dispatch, getState) => {
    const {id, title, content} = newPost;

    //We're accessing the firestore
    firestore.collection("posts").doc(`${id}`).set({
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

export {
  inc,
  dec,
  postsLoaded,
  removePost,
  addPost
};  
