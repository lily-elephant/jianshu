import {CHANGE_INPUT_VALUE, DELETE_ITEM, GET_LIST_DATA, SUBMIT_INPUT_VALUE} from "./actionTypes";
import axios from  'axios';

export const changeInputAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value: value
})

export const addItemAction = () => ({
  type: SUBMIT_INPUT_VALUE
})

export const deleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index: index
})

export const getListAction = (data) => ({
  type: GET_LIST_DATA,
  data: data
})

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('../../data.json').then(res => {
      const action = getListAction(res.data.data);
      dispatch(action);
    })
  }
}