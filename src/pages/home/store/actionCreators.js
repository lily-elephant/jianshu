import axios from 'axios'
import {fromJS} from 'immutable'
import {actionTypes} from './index'

export const getHomeAction = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then(res => {
      dispatch(getHomeData(res.data.data))
    })
  }
}

export const getMoreListAction = (page) => {
  return (dispatch) => {
    axios.get('/api/homeMore.json?page='+page).then(res => {
      dispatch(getMoreList(res.data.data, page+1))
    })
  }
}

export const showScrollAction = (show) => ({
  type: actionTypes.SHOW_SCROLL,
  show
})

const getMoreList = (data, page) => ({
  type: actionTypes.MORE_DATA,
  data: fromJS(data),
  page
})

const getHomeData = (data) => ({
  type: actionTypes.HOME_DATA,
  data: fromJS(data)
})