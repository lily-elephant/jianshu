import { put, takeEvery } from 'redux-saga/effects'
import {GET_INIT_LIST} from './actionTypes'
import {initListAction} from './actionCreators'
import axios from 'axios'

function* getInitList() {
  try{
    const res = yield axios.get('/list.json')
    const action = initListAction(res.data.list)
    yield put(action)
  }catch (e){
    console.log('出错了' + e)
  }
}

function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList)
}

export default mySaga