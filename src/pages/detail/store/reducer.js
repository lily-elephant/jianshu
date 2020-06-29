import {fromJS} from 'immutable'
import {actionTypes} from './'

const defaultState = fromJS({
  title: '',
  desc: ''
})

export default (state = defaultState, action) => {
  switch (action.type){
    case actionTypes.DETAIL_DATA:
      return state.merge({
        title: action.title,
        desc: action.desc
      })
    default:
      return state
  }
}