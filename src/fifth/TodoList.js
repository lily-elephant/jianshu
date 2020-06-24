import React, {Component} from 'react'
import store from './store'

class TodoList extends Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  render(){
    return (
      <div>
        <input type="text" value={} onChange={this.handleChange} />
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

  handleChange(e){

  }
  handleSubmit(){

  }
  handleDelete(index){

  }
}
