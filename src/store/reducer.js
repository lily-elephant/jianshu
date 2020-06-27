import {combineReducers} from 'redux-immutable' // 整合多个reducer
import {reducer as headerReducer} from '../common/header/store'

export default combineReducers({
  header: headerReducer
})