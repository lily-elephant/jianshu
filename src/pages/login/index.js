import React, {Component} from 'react'
import {connect} from 'react-redux'
import {actionCreators} from './store'
import {Redirect} from 'react-router-dom'

import {
  LoginWrapper,
  LoginMain,
  Input,
  Button
} from './style'

class Login extends Component {
  render(){
    if (!this.props.loginStatus){
      return (
        <LoginWrapper>
          <LoginMain>
            <Input type="text" placeholder="账号" ref={(input) => {this.account = input}} />
            <Input type="password" placeholder="密码" ref={(input) => {this.password = input}} />
            {/*<Button onClick={this.handleLogin.bind(this)}>登录</Button>*/}
            <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
          </LoginMain>
        </LoginWrapper>
      )
    }else {
      return <Redirect to="/" />
    }
  }
  handleLogin(){
    const account = this.account.value
    const password = this.password.value
    this.props.login(account, password)
  }
}

const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'loginStatus'])
})

const mapDispatch = (dispatch) => ({
  login(accountElem, passwordElem){
    const account = accountElem.value
    const password = passwordElem.value
    if (!account || !password){
      alert('账号或密码不可为空')
      return
    }
    dispatch(actionCreators.loginAction(account, password))
  }
})

export default connect(mapState, mapDispatch)(Login)