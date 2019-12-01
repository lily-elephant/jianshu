import React, { Component, Fragment } from 'react';
import TodoListUI from './TodoListUI';
import store from '../storeThunk';
// import { CHANGE_INPUT_VALUE, SUBMIT_INPUT_VALUE, DELETE_ITEM, GET_LIST_DATA } from '../storeThunk/actionTypes';
import { changeInputAction, addItemAction, deleteItemAction, getTodoList } from '../storeThunk/actionCreators';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    console.log(this.state)
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.handleStore = this.handleStore.bind(this);
    store.subscribe(this.handleStore);
  }


  render() {
    return (
      <Fragment>
        <TodoListUI
          inputVal={this.state.inputVal}
          list={this.state.list}
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
          handleDelete={this.handleDelete}
        />
        {/*<input value={this.state.inputVal} type="text" onChange={this.handleInput}/>*/}
        {/*<button onClick={this.handleSubmit}>提交</button>*/}
        {/*<ul>*/}
        {/*  {*/}
        {/*    this.state.list.map((item, index) => {*/}
        {/*      return <li key={index} onClick={() => {this.handleDelete(index)}}>{item}</li>*/}
        {/*    })*/}
        {/*  }*/}
        {/*</ul>*/}

      </Fragment>
    )
  }

  componentDidMount() {
    const action = getTodoList();
    console.log(action)
    store.dispatch(action);
  }

  handleInput(e){
    const action = changeInputAction(e.target.value);
    store.dispatch(action);
  }

  handleSubmit(){
    const action = addItemAction();
    store.dispatch(action);
  }

  handleDelete(index){
    const action = deleteItemAction(index)
    store.dispatch(action);
  }

  handleStore(){
    this.setState(store.getState())
  }
}

export default TodoList;