import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: [],
      inputVal: '33'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  render(){
    console.log('父组件')
    return (
      <Fragment>
        <input value={this.state.inputVal} type="text" onChange={this.handleChange} />
        <button onClick={this.handleSave}>提交</button>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li key={index} onClick={()=>{this.handleDelete(index)}}>{item}</li>
              )
            })
          }
        </ul>
        <ul>
          <li>我是第二个ul的分割线</li>
          {
            this.getTodoItem()
          }
        </ul>
      </Fragment>
    )
  }

  getTodoItem(){
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          index={index}
          content={item}
          deleteItem={this.handleDelete}>
        </TodoItem>
      )
    })
  }

  handleChange(e){
    let inputVal = e.target.value;
    this.setState({
      inputVal
    })
  }
  handleSave(){
    // let list = [...this.state.list];
    // list.unshift(this.state.inputVal);
    // this.setState({
    //   inputVal: '',
    //   list
    // })
    this.setState((prevState) => ({
      inputVal: '',
      list: [...prevState.list, prevState.inputVal]
    }))
  }
  handleDelete(index){
    let list = [...this.state.list];
    list.splice(index, 1)
    this.setState({
      list
    })
  }
}

export default TodoList;