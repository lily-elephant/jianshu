const defaultState = {
  inputVal: '1',
  list: []
}

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'change_input_value':
      newState.inputVal = action.value;
      return newState;
    case 'add_todo_item':
      newState.list.unshift(newState.inputVal);
      newState.inputVal = '';
      return  newState;
    default:
      return state;
  }
}