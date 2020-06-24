import React, {Component} from 'react'
import TodoListUI from './TodoListUI'

// 容器组件
class TodoList extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputVal: '',
      list: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  // render dom
  render(){
    return (
      <TodoListUI
        list={this.state.list}
        inputVal={this.state.inputVal}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleDelete={this.handleDelete}>
      </TodoListUI>
    )
  }
  // 方法
  handleChange(e){
    let inputVal = e.target.value
    this.setState(() => ({
      inputVal
    }))
  }
  handleSubmit(){
    this.setState((prevState) => {
      let list = [prevState.inputVal, ...prevState.list]
      return {
        list,
        inputVal: ''
      }
    })
  }
  handleDelete(index){
    let list = this.state.list
    list.splice(index, 1)
    this.setState(() => ({
      list
    }))
  }
}

export default TodoList