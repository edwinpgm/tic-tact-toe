import React from 'react'
import Styles from './Container.module.scss'

export const Container: React.FC = ({ children }) => <div className={Styles.Container}>{children}</div>
