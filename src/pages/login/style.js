import styled from 'styled-components'

export const LoginWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 57px;
  z-index: 0;
  padding: 20px 0;
  background: #f9f9f9;
`

export const LoginMain = styled.div`
  padding: 50px 30px; 
  margin: 8% auto 0;
  width: 350px;
  background: #fff;
  border-radius: 5px;
`

export const Input = styled.input`
  display: block;
  margin: 0 0 30px;
  padding: 0 15px;
  line-height: 30px;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  &::placeholder{
    color: #ccc;
  }
`

export const Button = styled.div`
  line-height: 30px;
  background: #0095ff;
  border-radius: 30px;
  text-align: center;
  color: #fff;
  cursor: pointer;
`