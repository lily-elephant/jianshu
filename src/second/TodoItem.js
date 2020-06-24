import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {

  render(){
    console.log(3)
    return (
      <Fragment>
        <li onClick={this.props.handleDelete}>{this.props.info}</li>
      </Fragment>
    )
  }

  shouldComponentUpdate(nextProps, nextState){
    if (nextProps.info !== this.props.info){
      return true
    }else {
      return false
    }
  }
}

TodoItem.propTypes = {
  info: PropTypes.string
}
TodoItem.defaultProps = {
  info: ''
}
export default TodoItem