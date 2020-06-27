import {CHANGE_INPUT_VAL, ADD_ITEM, DELETE_ITEM} from "./actionTypes";

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