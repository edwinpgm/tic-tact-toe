import React from 'react'
import Styles from './Square.module.scss'

export const Square: React.FC = ({ children, onSelect }) => {
  return (
    <button className={Styles.Square} onClick={onSelect}>{children}</button>
  )
}
