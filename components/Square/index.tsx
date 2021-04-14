import React from 'react'
import Styles from './Square.module.scss'

interface Props {
  onSelect: () => void
}

export const Square: React.FC<Props> = ({ children, onSelect }) => {
  return (
    <button className={Styles.Square} onClick={onSelect}>{children}</button>
  )
}
