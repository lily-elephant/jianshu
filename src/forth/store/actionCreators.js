import {CHANGE_INPUT_VAL, ADD_ITEM, DELETE_ITEM, GET_LIST} from './actionTypes'

export const getInputChangeAction = (inputVal) => ({
  type: CHANGE_INPUT_VAL,
  inputVal
})

export const getAddItemAction = () => ({
  type: ADD_ITEM
})

export const getDeleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index
})

export const getListAction = (data) => ({
  type: GET_LIST,
  data
})