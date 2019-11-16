// a reducer takes in the action and the copy of the current state

function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES':
      console.log('Incrementing likes');
      const i = action.index;
      console.log(action.index);
      return [
        ...state.slice(0, i),
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1)
      ]
    default: 
      return state
  }
}

export default posts;