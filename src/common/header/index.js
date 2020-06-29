import React, {Component} from 'react'
import {CSSTransition} from 'react-transition-group'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {actionCreators} from "./store"
import {actionCreators as loginCreators} from '../../pages/login/store'

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  SearchInput,
  Addition,
  Button,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem
} from './style'

class Header extends Component{

  render(){
    let { list } = this.props
    return (
      <HeaderWrapper>
        <Link to="/"><Logo/></Link>
        <Nav>
          <NavItem className="active">发现</NavItem>
          <NavItem>关注</NavItem>
          <SearchWrapper>
            <CSSTransition
              timeout={200}
              in={this.props.focus}
              classNames="slide"
            >
              <SearchInput
                className={this.props.focus ? 'focused' : ''}
                onFocus={() => this.props.slideUp(list)}
                onBlur={this.props.slideDown}>
              </SearchInput>
            </CSSTransition>
            <i className={this.props.focus ? 'iconfont focused zoom' : 'iconfont zoom'}>&#xe650;</i>
            {this.getListArea(this.props.focus, this.props.mouseIn)}
          </SearchWrapper>
          {
            this.props.loginStatus ? <NavItem className="right" onClick={this.props.logout}>退出</NavItem> :
              <Link to="/login"><NavItem className="right">登录</NavItem></Link>
          }
          <NavItem className="right iconfont">&#xe636;</NavItem>
        </Nav>
        <Addition>
          <Button className="reg">注册</Button>
          <Button className="writting"><i className="iconfont">&#xe6e5;</i> 写文章</Button>
        </Addition>
      </HeaderWrapper>
    )
  }

  getListArea(show, mouseIn){
    let {page, totalPage, list, handleMouseEnter, handleMouseLeave, handleSwitch} = this.props
    const pageList = []
    for(let i = (page-1) * 10; i < page * 10; i++){
      if (list.length && list[i]){
        pageList.push(<SearchInfoItem key={list[i].id}>{list[i].label}</SearchInfoItem>)
      }
    }
    if (show || mouseIn){
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => handleSwitch(page, totalPage, this.spinIcon)}>
              <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe6e5;</i>换一换
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            { pageList }
          </SearchInfoList>
        </SearchInfo>
      )
    }else {
      return null
    }
  }
  componentDidMount(){}
}

//immutable 类型的数据不能通过点语法获取，使用get方法获取
//redux-immutable使得state获取数据使用state.get()
const mapStateToProps = (state) => {
  return {
    //二者写法等同
    // focus: state.get('header').get('focus')
    focus: state.getIn(['header', 'focus']),
    list: state.getIn(['header', 'list']).toJS(),
    mouseIn: state.getIn(['header', 'mouseIn']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    loginStatus: state.getIn(['login', 'loginStatus'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    slideUp(list) {
      if (list.length === 0){
        dispatch(actionCreators.searchListAction())
      }
      dispatch(actionCreators.searchFocusAction())
    },
    slideDown() {
      dispatch(actionCreators.searchBlurAction())
    },
    handleMouseEnter(){
      dispatch(actionCreators.mouseEnterAction())
    },
    handleMouseLeave(){
      dispatch(actionCreators.mouseLeaveAction())
    },
    handleSwitch(page, totalPage, spin){
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      console.log(originAngle)
      if (originAngle){
        originAngle = parseInt(originAngle, 10)
      }else {
        originAngle = 0
      }
      spin.style.transform = 'rotate(' + (originAngle+360) + 'deg)'
      if (page < totalPage){
        dispatch(actionCreators.switchListAction(page+1))
      }else {
        dispatch(actionCreators.switchListAction(1))
      }
    },
    logout(){
      dispatch(loginCreators.logoutAction())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)