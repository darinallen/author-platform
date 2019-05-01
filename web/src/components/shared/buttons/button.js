import React from 'react'
import { cn } from '../../../lib/helpers'

import styles from './button.module.css'

const Button = ({ color, className, children }) => (
  <button className={cn(styles.root, styles[color], className)}>{children}</button>
)

export default Button
