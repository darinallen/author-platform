import React from 'react'
import { Link } from 'gatsby'
import { buildImageObj, getWritingUrl } from '../../../lib/helpers'
import { imageUrlFor } from '../../../lib/image-url'
import Line from '../../shared/line'
import styles from './card.module.css'

const Card = props => (
  <Link className={styles.root} to={getWritingUrl(props.releaseDate, props.slug.current)}>
    <div className={styles.header}>
      <h3 className={styles.title}>{props.title}</h3>
    </div>
    <div className={styles.content}>
      <div className={styles.bookCoverContainer}>
        <img
          className={styles.bookCover}
          src={imageUrlFor(buildImageObj(props.mainImage))
            .width(140)
            .url()}
          alt={props.mainImage.alt}
        />
      </div>
      <Line />
      <span className={styles.summary}>This is the book summary. It is a very exciting book!</span>
    </div>
  </Link>
)

export default Card
