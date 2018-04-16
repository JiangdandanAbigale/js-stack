// @flow

import React from 'react'
// 使用flow的类型别名，自定义了Props类型，来结构组件的props
type Props = {
  label: string,
  handleClick: Function
}

const Button = ({ label, handleClick }: Props) =>
  <button onClick={handleClick}>{label}</button>

export default Button
