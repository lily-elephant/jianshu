import axios from 'axios'

import {CHANGE_INPUT_VAL, ADD_ITEM, DELETE_ITEM, GET_LIST} from "./actionTypes";

export const changeInputAction = (value) => ({
  type: CHANGE_INPUT_VAL,
  value
})

export const submitAction = () => ({
  type: ADD_ITEM
})

export const deleteAction = (index) => ({
  type: DELETE_ITEM,
  index
})

export const initListAction = (data) => {
  return {
    type: GET_LIST,
    data
  }
}

// redux-thunk dispatch action可以派发一个函数，而不再是单纯的对象
export const getListAction = () => {
  return (dispatch) => {
    axios.get('/list.json').then(res => {
      const action = initListAction(res.data.list)
      dispatch(action)
    })
  }
}