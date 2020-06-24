import {CHANGE_INPUT_VAL, ADD_ITEM, DELETE_ITEM, GET_LIST} from './actionTypes'

const defaultState = {
  inputVal: '',
  list: []
}

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type){
    case CHANGE_INPUT_VAL:
      newState.inputVal = action.inputVal
      return newState
    case ADD_ITEM:
      newState.list.push(newState.inputVal)
      newState.inputVal = ''
      return newState
    case DELETE_ITEM:
      newState.list.splice(action.index, 1)
      return newState
    case GET_LIST:
      newState.list = action.data
      return newState
    default:
      return state
  }
}