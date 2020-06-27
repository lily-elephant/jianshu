import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #f0f0f0;
  height: 56px;
  margin-bottom: 20px;
  color: #444;
`

export const Logo = styled.a.attrs({
  href: 'https://www.jianshu.com/'
})`
  position: absolute;
  left: 0;
  top: 0;
  width:100px;
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

export const NavItem = styled.a`
  display: block;
  float: left;
  height: 56px;
  line-height: 56px;
  padding: 0 15px;
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
  .iconfont{
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