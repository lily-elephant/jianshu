import {combineReducers} from 'redux-immutable' // 整合多个reducer
import {reducer as headerReducer} from '../common/header/store'
import {reducer as homeReducer} from '../pages/home/store'

export default combineReducers({
  header: headerReducer,
  home: homeReducer
})