import React, {Component, Fragment} from 'react'
import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputVal: '',
      list: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
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
        inputVal: '',
        list
      }
    })
  }
  handleDelete(index){
    console.log(index)
    let list = this.state.list
    list.splice(index, 1)
    this.setState(() => ({
      list
    }))
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