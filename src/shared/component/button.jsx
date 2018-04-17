// @flow

import React from 'react'
// 使用flow的类型别名，自定义了Props类型，来结构组件的props
type Props = {
  label: string,
  handleClick: Function
}

const Button = ({ label, handleClick }: Props) =>
  (
    <button
      onClick={handleClick}
      className="btn btn-primary"
      type="button"
    >{label}
    </button>
  )

export default Button
