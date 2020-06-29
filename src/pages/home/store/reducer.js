import {fromJS} from 'immutable'
import {actionTypes} from './index'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false
})

export default (state = defaultState, action) => {
  switch (action.type){
    case actionTypes.HOME_DATA:
      return state.merge({
        'topicList': action.data.get('topicList'),
        'articleList': action.data.get('articleList'),
        'recommendList': action.data.get('recommendList')
      })
    case actionTypes.MORE_DATA:
      //immutable类型也有concat方法
      let oldData = state.get('articleList')
      return state.merge({
        'articleList': oldData.concat(action.data),
        'articlePage': action.page
      })
    case actionTypes.SHOW_SCROLL:
      return state.set('showScroll', action.show)
    default:
      return state
  }
}