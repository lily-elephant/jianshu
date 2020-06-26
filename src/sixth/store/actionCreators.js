
import {GET_LIST, GET_INIT_LIST} from "./actionTypes";

export const initListAction = (data) => ({
  type: GET_LIST,
  data
})

export const getInitListAction = () => ({
  type: GET_INIT_LIST
})