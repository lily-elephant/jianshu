import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  TopicWrapper,
  TopicItem
} from '../style'

class Topic extends Component {
  render() {
    return(
      <TopicWrapper>
        {
          this.props.list.map((item) => {
            return (
              <TopicItem key={item.get('id')}>
                <img src={item.get('imgUrl')} className="topic-img" alt=""/>
                {item.get('title')}
              </TopicItem>
            )
          })
        }
      </TopicWrapper>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'topicList'])
})

export default connect(mapState, null)(Topic)