import {SEARCH_FOCUS, SEARCH_BLUR} from "./actionTypes"
//immutable.js是有助于性能提升的，尤其是数据量大时
import {fromJS} from 'immutable'

const defaultState = fromJS({
  focus: false
})

export default (state = defaultState, action) => {
  // const newState = JSON.parse(JSON.stringify(state))
  switch (action.type){
    case SEARCH_FOCUS:
      // immutable对象的set方法，会结合之前immutable对象的值
      // 和设置的值，返回一个全新的对象
      return state.set('focus', true)
    case SEARCH_BLUR:
      return state.set('focus', false)
    default:
      return state
  }
}