const initState = {
  count: 0,
  posts: [],
  isLogin: true,
  password: '',
  email: '',
  user: false
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'INC':
      return state = {
        count: state['count'] + 1,
        posts: state['posts']
      }

    case 'DEC':
      return {
        count: state['count'] > 0 ? state['count'] - 1 : state['count'],
        posts: state['posts']
      }
    
    case 'POSTS_LOADED':
      return state = {
        count: state['count'],
        posts: action.payload
      }

    case 'REMOVE_POST':
      return state = {
        count: state['count'],
        posts: action.payload
      }

    case 'ADD_POST':
      return state = {
        count: state['count'],
        posts: action.payload
      }

    case 'AUTH_USER':
      return state = {
        user: action.payload
      }

    default:
      return initState
  }
};

export default projectReducer;