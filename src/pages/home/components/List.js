import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {actionCreators} from '../store'
import {
  ArticleWrapper,
  ArticleItem,
  ArticleLeft,
  ArticleRight,
  LoadMore
} from '../style'

class List extends Component {
  render() {
    return(
      <ArticleWrapper>
        {
          this.props.list.map((item, index) => {
            return (
              <ArticleItem key={index}>
                <ArticleLeft className={item.get('imgUrl') ? '' : 'no-img'}>
                  <Link to={'/detail/'+item.get('id')}><h3 className="title">{item.get('title')}</h3></Link>
                  <p className="desc">{item.get('desc')}</p>
                </ArticleLeft>
                <ArticleRight>
                  <Link to={'/detail/'+item.get('id')}>
                    <img className="pic" src={item.get('imgUrl')} alt=""/>
                  </Link>
                </ArticleRight>
              </ArticleItem>
            )
          })
        }
        <LoadMore onClick={()=>this.props.loadMore(this.props.articlePage)}>加载更多</LoadMore>
      </ArticleWrapper>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'articleList']),
  articlePage: state.getIn(['home', 'articlePage'])
})

const mapDispatch = (dispatch) => ({
  loadMore(page){
    const action = actionCreators.getMoreListAction(page)
    dispatch(action)
  }
})

export default connect(mapState, mapDispatch)(List)