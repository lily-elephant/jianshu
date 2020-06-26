import React from 'react'
import {connect} from 'react-redux'
import {CHANGE_INPUT_VAL, ADD_ITEM, DELETE_ITEM} from './store/actionTypes'

// class TodoList extends Component {
//
//   render(){
//     return (
//       <div>
//         <input type="text" value={this.props.inputVal} onChange={this.props.handleChange} />
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
// 无状态组件
const TodoList = (props) => {
  return (
    <div>
      <input type="text" value={props.inputVal} onChange={props.handleChange} />
      <button onClick={props.handleSubmit}>提交</button>
      <ul>
        {
          props.list.map((item, index) => {
            return <li key={index} onClick={() => {props.handleDelete(index)}}>{item}</li>
          })
        }
      </ul>
    </div>
  )
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
        type: CHANGE_INPUT_VAL,
        value: e.target.value
      }
      dispatch(action)
    },
    handleSubmit(){
      const action = {
        type: ADD_ITEM
      }
      dispatch(action)
    },
    handleDelete(index){
      const action = {
        type: DELETE_ITEM,
        index
      }
      dispatch(action)
    },

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)