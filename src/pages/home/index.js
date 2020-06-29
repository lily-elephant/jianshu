import React, {Component} from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import {connect} from 'react-redux'
import {actionCreators} from './store'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
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
        { this.props.showScroll ? <BackTop onClick={this.backTop}>to top</BackTop> : null}
      </HomeWrapper>
    )
  }
  componentDidMount(){
    this.props.getHomeData()
    this.bindEvents()
  }
  backTop(){
    window.scrollTo(0, 0)
  }
  bindEvents(){
    window.addEventListener('scroll', this.props.handleScroll)
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.props.handleScroll)
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
  getHomeData(){
    const action = actionCreators.getHomeAction()
    dispatch(action)
  },
  handleScroll(){
    if (document.documentElement.scrollTop > 400){
      dispatch(actionCreators.showScrollAction(true))
    }else {
      dispatch(actionCreators.showScrollAction(false))
    }
  }
})
export default connect(mapState, mapDispatch)(Home)