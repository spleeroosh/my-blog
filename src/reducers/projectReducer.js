const initState = {
  count: 0,
  posts: [],
  user: false
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'INC':
      return state = {
        ...state,
        count: state['count'] + 1,
      }

    case 'DEC':
      return {
        ...state,
        count: state['count'] > 0 ? state['count'] - 1 : state['count']
      }
    
    case 'POSTS_LOADED':
      return state = {
        ...state,
        posts: action.payload,
      }

    case 'REMOVE_POST':
      return state = {
        ...state,
        posts: action.payload,
      }

    case 'ADD_POST':
      return state = {
        ...state,
        posts: action.payload,
      }

    case 'AUTH_USER':
      return state = {
        ...state,
        user: action.payload
      }

    case 'SIGN_OUT':
      return state = {
        ...state,
        user: action.payload
      }

    default:
      return initState
  }
};

export default projectReducer;