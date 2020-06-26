import axios from 'axios'

import {GET_LIST} from "./actionTypes";

export const initListAction = (data) => {
  return {
    type: GET_LIST,
    data
  }
}

export const getListAction = () => {
  return (dispatch) => {
    axios.get('/list.json').then(res => {
      const action = initListAction(res.data.list)
      dispatch(action)
    })
  }
}