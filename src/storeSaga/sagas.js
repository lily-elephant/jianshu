import { takeEvery, put } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import { getListAction } from './actionCreators';
import axios from 'axios';

function* getInitList() {
  try{
    const res = yield axios.get('../../data.json');
    const action = getListAction(res.data.data);
    yield put(action);
  }catch (e) {
    console.log(e, '网络请求失败了')
  }
}

function* todoSaga() {
  yield takeEvery(GET_INIT_LIST, getInitList)
}

export default todoSaga;