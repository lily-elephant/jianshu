import styled from 'styled-components'

export const DetailContainer = styled.div`
  background: #f9f9f9;
  margin-top: -20px;
  padding-top: 10px;
`

export const DetailWrapper = styled.div`
  display: flex;
  width: 960px;
  margin: 0 auto;
`

export const DetailLeft = styled.div`
  margin: 0 10px 24px 0;
  padding: 24px;
  box-sizing: border-box;
  width: 700px;
  background: #fff;
  color: #333;
  .title{
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 0.5em;
  }
`

export const Content = styled.div`
  p{
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 1.8;
    font-weight: 400;
  }
  img{
    display: block;
    margin: 0 auto;
    max-width: 100%;
  }
`

export const DetailRight = styled.div`
  width: 250px;
`
