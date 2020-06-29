import React, {Component} from 'react'
import {GlobalStyle} from './style'
import {GlobalIcon} from "./statics/iconfont/iconfont"
import {Provider} from 'react-redux'
import store from './store'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'

import Header from './common/header'

class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <GlobalStyle />
        <GlobalIcon />
        <BrowserRouter>
          <Header></Header>
          <Route path="/" exact component={Home}></Route>
          <Route path="/detail/:id" exact component={Detail}></Route>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App