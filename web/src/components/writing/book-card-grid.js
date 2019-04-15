import React from 'react'
import BookCard from './book-card'

import styles from './book-card-grid.module.css'

const BookCardGrid = ({ nodes }) => (
  <ul className={styles.root}>
    {nodes &&
      nodes.map(node => (
        <li key={node.id}>
          <BookCard {...node} />
        </li>
      ))}
  </ul>
)

export default BookCardGrid
