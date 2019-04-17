import React from 'react'
import Card from './card'

import styles from './card-grid.module.css'

const CardGrid = ({ nodes }) => (
  <ul className={styles.root}>
    {nodes &&
      nodes.map(node => (
        <li key={node.id}>
          <Card {...node} />
        </li>
      ))}
  </ul>
)

export default CardGrid
