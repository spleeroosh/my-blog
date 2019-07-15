const initState = {
  count: 0,
  posts: []
}
const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'INC':
      return state = {
        count: state['count'] + 1,
        posts: state['posts']
      }

    case 'DEC':
      return {
        count: state['count'] - 1,
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

    default:
      return initState
  }
};

export default reducer;