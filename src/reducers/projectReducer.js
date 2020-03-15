const init_state = {
  count: 0,
  posts: [],
  about: {},
  user: null,
  is_searchbar: false,
  is_shownav: false
};

const projectReducer = (state = init_state, action) => {
  switch (action.type) {    
  case 'POSTS_LOADED':
    return state = {
      ...state,
      posts: action.payload,
    };
  
  case 'ABOUT_LOADED':
    return state = {
      ...state,
      about: action.payload,
    };

  case 'POSTS_FILTERED':
    return state = {
      ...state,
      posts_filter: action.payload
    };

  case 'REMOVE_POST':
    return state = {
      ...state,
      posts: action.payload,
    };

  case 'ADD_POST':
    return state = {
      ...state,
      posts: action.payload,
    };

  case 'AUTH_USER':
    return state = {
      ...state,
      user: action.payload
    };

  case 'SIGN_OUT':
    return state = {
      ...state,
      user: action.payload
    };
  
  case 'UPDATE_USER':
    return state = {
      ...state,
      user: action.payload
    };

  case 'SHOW_SEARCH_BAR':
    return state = {
      ...state,
      is_searchbar: action.payload
    };

  case 'SHOW_NAV_BAR':
    return state = {
      ...state,
      is_shownav: action.payload
    };

  default:
    return init_state;
  }
};

export default projectReducer;