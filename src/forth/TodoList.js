import React, {Component, Fragment} from 'react'
import TodoItem from "./TodoItem";
import store from './store'
import axios from 'axios'
import {getInputChangeAction, getAddItemAction, getDeleteItemAction, getListAction} from './store/actionCreators'

class TodoList extends Component {
  constructor(props){
    super(props)
    this.state = store.getState()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleStore = this.handleStore.bind(this)
    // subscribe订阅store变化
    store.subscribe(this.handleStore)
  }
  // render dom
  render(){
    return (
      <Fragment>
        <input type="text" value={this.state.inputVal} onChange={this.handleChange} />
        <button type="button" onClick={this.handleSubmit}>提交</button>
        <ul>
          {
            this.getTodoItem()
          }
        </ul>
      </Fragment>
    )
  }

  componentDidMount(){
    axios.get('/list.json').then(res => {
      const action = getListAction(res.data.list)
      store.dispatch(action)
    })
  }
  // 方法
  // 获取新的state
  handleStore(){
    this.setState(store.getState())
  }
  handleChange(e){
    let inputVal = e.target.value
    const action = getInputChangeAction(inputVal)
    store.dispatch(action)
  }
  handleSubmit(){
    const action = getAddItemAction()
    store.dispatch(action)
  }
  handleDelete(index){
    console.log(index)
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
  getTodoItem(){
    if (this.state.list.length === 0){
      return <div>暂无数据</div>
    }else {
      return (
        this.state.list.map((v, i) => {
          return <TodoItem info={v} key={i} handleDelete={()=>{this.handleDelete(i)}} />
        })
      )
    }
  }
}

export default TodoList