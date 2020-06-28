import styled from 'styled-components'

export const HomeWrapper = styled.div`
  margin: 0 auto;
  padding: 10px 0 0;
  overflow: hidden;
  width: 960px;
`

export const HomeLeft = styled.div`
  float: left;
  width: 625px;
  .banner-pic{
    display: block;
    margin-bottom: 30px;
    width: 625px;
    height: 270px;
    border-radius: 5px;
  }
`

export const TopicWrapper = styled.div`
  margin-left: -18px;
  overflow: hidden;
  border-bottom: 1px solid #dcdcdc;  
`

export const TopicItem = styled.a`
  display: block;
  float: left;
  margin: 0 0 18px 18px;
  padding-right: 5px;
  height: 32px;
  line-height: 32px;
  font-size: 12px;
  color: #999;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  cursor: pointer;
  .topic-img{
    display: block;
    float:left;
    margin-right: 5px;
    width: 32px;
    height: 32px;
  }
`
export const ArticleWrapper = styled.div`

`

export const ArticleItem = styled.div`
  position: relative;
  padding: 15px 0 20px;
  min-height: 100px;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
`

export const ArticleLeft = styled.div`
  padding-right: 165px;
  .title{
    margin: 0 0 4px;
    font-size: 18px;
    color: #333;
  }
  .desc{
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
  &.no-img{
    padding-right: 0;
  }
`

export const ArticleRight = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  margin-top: -50px;
  width: 150px;
  height: 100px;
  .pic{
    width: 150px;
    height: 100px;
    border-radius: 3px;
  }
`

export const LoadMore = styled.div`
  width: 80%;
  margin: 30px auto;
  line-height: 30px;
  background: #e6e6e6;
  border-radius: 20px;
  font-size: 12px;
  color: #999;
  text-align: center;
  cursor: pointer;
`

export const HomeRight = styled.div`
 float: right;
 width: 280px;
`

export const RecommendWrapper = styled.div`
  
`

export const RecommendItem = styled.a`
  display: block;
  margin-bottom: 6px;
  width: 280px;
  height: 50px;
  background: url(${(props)=> props.imgUrl});
  background-size: contain;
  cursor: pointer;
`
