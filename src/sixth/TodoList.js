import React, {Component} from 'react'
import store from './store'
import {changeInputAction, submitAction, deleteAction, getInitListAction} from "./store/actionCreators";

class TodoList extends Component {
  constructor(props){
    super(props)
    this.state = store.getState()
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleStore = this.handleStore.bind(this)
    store.subscribe(this.handleStore)
  }

  render(){
    return (
      <div>
        <input type="text" value={this.state.inputVal} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>提交</button>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <li key={index} onClick={() => {this.handleDelete(index)}}>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
  //
  componentDidMount(){
    const action = getInitListAction()
    store.dispatch(action)
  }

  handleStore(){
    this.setState(store.getState())
  }
  handleChange(e){
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
  }
  handleSubmit(){
    const action = submitAction()
    store.dispatch(action)
  }
  handleDelete(index){
    const action = deleteAction(index)
    store.dispatch(action)
  }
}

export default TodoList