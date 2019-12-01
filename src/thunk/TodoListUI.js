import React, { Component } from 'react';
/*
* UI组件不涉及业务逻辑，无生命周期函数，只负责单纯的渲染，所有数据都通过 props 传入。
* UI组件分为两类， 无状态组件和有状态组件
* 无状态组件使用纯函数
* 有状态组件使用react的PureComponent，可能会在有状态组件中定义一些方法，以避免render中绑定this带来的性能消耗
* */

// 纯函数
const TodoListUI = (props) => {
  let info = null;
  if (props.list.length === 0) {
    info = (<div>暂无数据</div>)
  }else {
    info =(
      <ul>
        {
          props.list.map((item, index) => {
            return <li key={index} onClick={() => {props.handleDelete(index)}}>{item}</li>
          })
        }
      </ul>
    )
  }
  return (
    <div>
      <input value={props.inputVal} type="text" onChange={props.handleInput}/>
      <button onClick={props.handleSubmit}>提交</button>
      {info}
    </div>
  )
}

// class TodoListUI extends Component{
//   render() {
//     return (
//       <div>
//         <input value={this.props.inputVal} type="text" onChange={this.props.handleInput}/>
//         <button onClick={this.props.handleSubmit}>提交</button>
//         <ul>
//           {
//             this.props.list.map((item, index) => {
//               return <li key={index} onClick={() => {this.props.handleDelete(index)}}>{item}</li>
//             })
//           }
//         </ul>
//       </div>
//     )
//   }
// }
//
export default TodoListUI;