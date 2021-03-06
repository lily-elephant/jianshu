import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  z-index: 1;
  background-color: #fff;
  border-bottom: 1px solid #f0f0f0;
  height: 56px;
  margin-bottom: 20px;
  color: #444;
`

export const Logo = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`

export const Nav = styled.div`
  margin: 0 auto;
  padding-right: 50px;
  width: 910px;
  height: 56px;
`

export const NavItem = styled.span`
  display: block;
  float: left;
  height: 56px;
  line-height: 56px;
  padding: 0 15px;
  color: #444;
  &.active{
    color: #ea6f5a;
  }
  &.right{
    float:right;
  }
`

export const SearchWrapper = styled.div`
  float: left;
  position:relative;
  padding: 9px 0 0 20px;
  .zoom{
    position: absolute;
    right: 3px;
    top:13px;
    line-height: 30px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: transparent;
    text-align: center;
    color: #999;
    &.focused{
      background: #888;
      color: #fff;
    }
  }
`

export const SearchInput = styled.input.attrs({
  placeholder: '搜索'
})`
  padding: 0 40px 0 20px;
  background: #eee;
  border-radius: 40px;
  width: 160px;
  height: 38px;
  border: 1px solid #eee;
  box-sizing: border-box;
  outline: none;
  &.focused{
    width:240px;
  }
  &.slide-enter{
    transition: all .2s ease-out;
  }
  &.slide-enter-active{
    width: 240px;
  }
  &.slide-exit{
    transition: all .2s ease-out;
  }
  &.slide-exit-active{
    width: 160px;
  }
  &::placeholder{
    color: #999;
  }
`
export const SearchInfo = styled.div`
  position: absolute;
  top: 56px;
  left: 20px;
  padding: 15px 10px;
  box-sizing: border-box;
  width: 240px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,0.2);
  border-radius: 3px;
`

export const SearchInfoTitle = styled.div`{
  margin-bottom: 10px;
  font-size: 14px;
}`

export const SearchInfoSwitch = styled.span`{
  float: right;
  color: #999;
  font-size: 12px;
  cursor: pointer;
  .spin{
    display: inline-block;
    margin-right: 2px;
    font-size: 12px;
    transition: all .2s ease-in;
    transform-origin: center center;
  }
}`

export const SearchInfoList = styled.div`{
  
}`

export const SearchInfoItem = styled.a`{
  display: inline-block;
  line-height: 20px;
  padding: 0 5px;
  margin: 0 10px 15px 0;
  font-size: 12px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;
  cursor: pointer;
}`

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`

export const Button = styled.div`
  display: inline-block;
  line-height:34px;
  margin-top: 10px;
  margin-right: 20px;
  padding:0 20px;
  border: 1px solid #ea6f5a;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  &.reg{
    color:#ea6f5a
  }
  &.writting{
    background: #ea6f5a;
    color:#fff;
    .iconfont{
      font-size: 14px;
    }
  }
`