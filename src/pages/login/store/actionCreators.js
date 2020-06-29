import axios from 'axios'
import {actionTypes} from './'

export const loginAction = (account, password) => {
  return (dispatch) => {
    axios.get(`/api/login.json?account=${account}&password=${password}`).then(res => {
      if (res.data.success){
        dispatch(changeLogin())
      }
    }).catch((err) => {
      alert(err+'登录失败')
    })
  }
}

export const logoutAction = () => ({
  type: actionTypes.LOGOUT
})

const changeLogin = () => ({
  type: actionTypes.LOGIN
})