// a reducer takes in the action and the copy of the current state

function comments(state = [], action) {
  console.log(state, action);

  return state;
}

export default comments;