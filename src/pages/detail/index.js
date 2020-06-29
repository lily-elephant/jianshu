import React, {Component} from 'react'
import {connect} from 'react-redux'
import {actionCreators} from './store'

import {
  DetailContainer,
  DetailWrapper,
  DetailLeft,
  DetailRight,
  Content
} from './style'

class Detail extends Component {
  render(){
    return (
      <DetailContainer>
        <DetailWrapper>
          <DetailLeft>
            <h3 className="title">{this.props.title}</h3>
            <Content dangerouslySetInnerHTML={{__html: this.props.desc}} />
          </DetailLeft>
          <DetailRight></DetailRight>
        </DetailWrapper>
      </DetailContainer>
    )
  }

  componentDidMount(){
    this.props.getDetail(this.props.match.params.id)
  }
}

const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  desc: state.getIn(['detail', 'desc'])
})

const mapDispatch = (dispatch) => ({
  getDetail(id){
    dispatch(actionCreators.getDetailAction(id))
  }
})

export default connect(mapState, mapDispatch)(Detail)