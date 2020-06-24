import React, { Fragment} from 'react'

// UI组件
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