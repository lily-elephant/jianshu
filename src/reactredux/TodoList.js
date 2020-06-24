import React, { Component, Fragment } from 'react';
import store from '../reactreduxStore'
import { connect } from 'react-redux';

class TodoList extends Component {

  render() {
    return (
      <Fragment>
        <input value={this.props.inputVal} onChange={this.props.handleChange} type="text" />
        <button onClick={this.props.handleClick}>提交</button>
        <ul>
          {
            this.props.list.map((item, index) => {
              return <li>{item}</li>
            })
          }
        </ul>
      </Fragment>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    inputVal: state.inputVal,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange(e){
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action);
    },
    handleClick(){
      const action = {
        type: 'add_todo_item'
      }
      dispatch(action);
    }

  }
}

// 让TodoList和store做连接，连接规则在mapStateToProps里面，把state的值映射到组件的props里，
// 如果想对store里的数据做修改，把store的dispatch挂载到props上
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);