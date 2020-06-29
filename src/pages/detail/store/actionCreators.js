import axios from 'axios'
import {actionTypes} from './'

export const getDetailAction = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id='+id).then(res => {
      const data = res.data.data
      dispatch(getDetailData(data.title, data.desc))
    })
  }
}

const getDetailData = (title, desc) => ({
  type: actionTypes.DETAIL_DATA,
  title,
  desc
})