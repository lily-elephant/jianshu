import React, { Component, Fragment } from 'react';

class TodoItem extends Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render(){
    const {content, deleteItem} = this.props;
    return (
      <Fragment>
        {/*下面注释的写法也可行*/}
        {/*
        <li onClick={deleteItem}>
          {content}
        </li>
        */}
        <li onClick={this.handleClick}>{content}</li>
      </Fragment>
    )
  }

  handleClick(){
    const { deleteItem, index } = this.props;
    deleteItem(index);
  }
}

export default TodoItem;