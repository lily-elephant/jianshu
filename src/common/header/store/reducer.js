import * as actionTypes from "./actionTypes"
//immutable.js是有助于性能提升的，尤其是数据量大时
import {fromJS} from 'immutable'

const defaultState = fromJS({
  focus: false,
  mouseIn: false,
  list: [], //list是immutable类型的，如果在actionCreators中不对数据处理成fromJS(data)，那么数据类型就会发生改变，变成普通类型数据
  page: 1,
  totalPage: 1
})

export default (state = defaultState, action) => {
  // const newState = JSON.parse(JSON.stringify(state))
  switch (action.type){
    case actionTypes.SEARCH_FOCUS:
      // immutable对象的set方法，会结合之前immutable对象的值
      // 和设置的值，返回一个全新的对象
      return state.set('focus', true)
    case actionTypes.SEARCH_BLUR:
      return state.set('focus', false)
    case actionTypes.SEARCH_LIST:
      // return state.set('list', action.data).set('totalPage', action.totalPage)
      return state.merge({
        'list': action.data,
        'totalPage': action.totalPage
      })
    case actionTypes.MOUSE_ENTER:
      return state.set('mouseIn', true)
    case actionTypes.MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case actionTypes.SWITCH_LIST:
      return state.set('page', action.page)
    default:
      return state
  }
}