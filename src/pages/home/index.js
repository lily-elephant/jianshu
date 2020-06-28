import React, {Component} from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import {connect} from 'react-redux'
import {actionCreators} from './store'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style'


class Home extends Component {
  render(){
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-pic" src="https://upload.jianshu.io/admin_banners/web_images/4984/79ff791e7ddb523246801d656818282e66d40d98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
        </HomeRight>
      </HomeWrapper>
    )
  }
  componentDidMount(){
    this.props.getHomeData()
  }
}

const mapState = (state) => ({

})

const mapDispatch = (dispatch) => ({
  getHomeData(){
    const action = actionCreators.getHomeAction()
    dispatch(action)
  }
})
export default connect(mapState, mapDispatch)(Home)