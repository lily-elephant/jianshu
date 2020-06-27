import {CHANGE_INPUT_VAL, ADD_ITEM, DELETE_ITEM, GET_LIST, GET_INIT_LIST} from "./actionTypes";

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

export const initListAction = (data) => ({
  type: GET_LIST,
  data
})

export const getInitListAction = () => ({
  type: GET_INIT_LIST
})