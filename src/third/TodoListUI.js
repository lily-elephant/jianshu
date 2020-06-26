import React, { Fragment} from 'react'

/*
* UI组件不涉及业务逻辑，无生命周期函数，只负责单纯的渲染，所有数据都通过 props 传入。
* UI组件分为两类， 无状态组件和有状态组件
* 无状态组件使用纯函数
* 有状态组件使用react的PureComponent，可能会在有状态组件中定义一些方法，以避免render中绑定this带来的性能消耗
* */
// class TodoListUI extends Component {
//   render() {
//     return (
//       <Fragment>
//         <input type="text" value={this.props.inputVal} onChange={this.props.handleChange} />
//         <button type="button" onClick={this.props.handleSubmit}>提交</button>
//         <ul>
//           {
//             this.props.list.map((item, index) => {
//               return (
//                 <li key={index} onClick={()=>{this.props.handleDelete(index)}}>{item}</li>
//               )
//             })
//           }
//         </ul>
//       </Fragment>
//     )
//   }
// }

// 无状态组件
// 是个纯函数
const TodoListUI = (props) => {
  let {inputVal, list, handleChange, handleSubmit, handleDelete} = props
  return (
    <Fragment>
      <input type="text" value={inputVal} onChange={handleChange} />
      <button type="button" onClick={handleSubmit}>提交</button>
      <ul>
        {
          list.map((item, index) => {
            return (
              <li key={index} onClick={()=>{handleDelete(index)}}>{item}</li>
            )
          })
        }
      </ul>
    </Fragment>
  )
}
export default TodoListUI