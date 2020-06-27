import {CHANGE_INPUT_VAL, ADD_ITEM, DELETE_ITEM} from "./actionTypes";

const defaultState = {
  inputVal: 'react-redux',
  list: []
}
export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type){
    case CHANGE_INPUT_VAL:
      newState.inputVal = action.value
      return newState
    case ADD_ITEM:
      newState.list.unshift(newState.inputVal)
      newState.inputVal = ''
      return newState
    case DELETE_ITEM:
      newState.list.splice(action.index, 1)
      return newState
    default:
      return state
  }
}