import {GET_LIST} from "./actionTypes";

const defaultState = {
  list: [],
  inputVal: '123'
}

export default (state = defaultState, action) => {
  console.log(action)
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type){
    case GET_LIST:
      newState.list = action.data
      return newState
    default:
      return state
  }
}