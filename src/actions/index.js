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
  };
};

const removePost = (newPosts) => {
  return {
    type: 'REMOVE_POST',
    payload: newPosts
  };
};

const addPost = (newPosts) => {
  return {
    type: 'ADD_POST',
    payload: newPosts
  };
};

export {
  inc,
  dec,
  postsLoaded,
  removePost,
  addPost
};  
