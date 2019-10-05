const initState = {
  count: 0,
  posts: [],
  password: '',
  email: '',
  user: false
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'INC':
      return state = {
        count: state['count'] + 1,
        posts: state['posts'],
        user: state['user']
      }

    case 'DEC':
      return {
        count: state['count'] > 0 ? state['count'] - 1 : state['count'],
        posts: state['posts'],
        user: state['user']
      }
    
    case 'POSTS_LOADED':
      return state = {
        count: state['count'],
        posts: action.payload,
        user: state['user']
      }

    case 'REMOVE_POST':
      return state = {
        count: state['count'],
        posts: action.payload,
        user: state['user']
      }

    case 'ADD_POST':
      return state = {
        count: state['count'],
        posts: action.payload,
        user: state['user']
      }

    case 'AUTH_USER':
      return state = {
        count: state['count'],
        user: action.payload
      }

    default:
      return initState
  }
};

export default projectReducer;