import React from 'react'
import {CSSTransition} from 'react-transition-group'
import {connect} from 'react-redux'
import {actionCreators} from "./store"
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  SearchInput,
  Addition,
  Button
} from './style'

const Header = (props) => {
  return (
    <HeaderWrapper>
      <Logo/>
      <Nav>
        <NavItem href="/" className="active">发现</NavItem>
        <NavItem>关注</NavItem>
        <SearchWrapper>
          <CSSTransition
            timeout={200}
            in={props.focus}
            classNames="slide"
          >
            <SearchInput
              className={props.focus ? 'focused' : ''}
              onFocus={props.slideUp}
              onBlur={props.slideDown}>
            </SearchInput>
          </CSSTransition>
          <i className={props.focus ? 'iconfont focused' : 'iconfont'}>&#xe650;</i>
        </SearchWrapper>
        <NavItem className="right">登录</NavItem>
        <NavItem className="right iconfont">&#xe636;</NavItem>
      </Nav>
      <Addition>
        <Button className="reg">注 册</Button>
        <Button className="writting"><i className="iconfont">&#xe6e5;</i> 写文章</Button>
      </Addition>
    </HeaderWrapper>
  )
}

//immutable 类型的数据不能通过点语法获取，使用get方法获取
//redux-immutable使得state获取数据使用state.get()
const mapStateToProps = (state) => {
  return {
    //二者写法等同
    // focus: state.get('header').get('focus')
    focus: state.getIn(['header', 'focus'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    slideUp() {
      const action = actionCreators.searchFocusAction()
      dispatch(action)
    },
    slideDown() {
      const action = actionCreators.searchBlurAction()
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)