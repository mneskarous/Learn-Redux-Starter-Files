// a reducer takes in the action and the copy of the current state

function postComments(state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT': 
      // return the new state with the new comment
      return [...state, {
        user: action.author,
        text: action.comment
      }]
    case 'REMOVE_COMMENT': 
      console.log('Removing comment');
      return state;
    default: 
     return state;
  }
}

function comments(state = [], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      // take the current state
      ...state, 
      // overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;