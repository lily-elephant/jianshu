import { CHANGE_INPUT_VALUE, SUBMIT_INPUT_VALUE, DELETE_ITEM, GET_LIST_DATA } from './actionTypes'

const defaultState = {
  list: [],
  inputVal: '1'
}

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      newState.inputVal = action.value;
      return newState;
    case SUBMIT_INPUT_VALUE:
      newState.list.unshift(state.inputVal);
      newState.inputVal = '';
      return newState;
    case DELETE_ITEM:
      newState.list.splice(action.index, 1);
      return newState;
    case GET_LIST_DATA:
      newState.list = action.data;
      return newState;
    default:
      return state
  }
}