import * as actionTypes from "./actionTypes"
import axios from 'axios'
import {fromJS} from 'immutable'

export const searchFocusAction = () => ({
  type: actionTypes.SEARCH_FOCUS
})

export const searchBlurAction = () => ({
  type: actionTypes.SEARCH_BLUR
})

export const mouseEnterAction = () => ({
  type: actionTypes.MOUSE_ENTER
})

export const mouseLeaveAction = () => ({
  type: actionTypes.MOUSE_LEAVE
})

export const switchListAction = (page) => ({
  type: actionTypes.SWITCH_LIST,
  page
})

// redux-thunk为的是返回一个函数
export const searchListAction = () => {
  return (dispatch) => {
    axios.get('/api/search.json').then(res => {
      const action = getSearchAction(res.data.data)
      dispatch(action)
    })
  }
}

const getSearchAction = (data) => ({
  type: actionTypes.SEARCH_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})