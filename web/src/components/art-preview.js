import React from 'react'
import { Link } from 'gatsby'
import { buildImageObj, getArtUrl } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import styles from './art-preview.module.css'

const ArtPreview = props => (
  <Link className={styles.root} to={getArtUrl(props.slug.current)}>
    {/* <div className={styles.header}>
      <h3 className={styles.title}>{props.title}</h3>
    </div> */}
    <div className={styles.frame}>
      <img
        className={styles.art}
        src={imageUrlFor(buildImageObj(props.mainImage))
          .width(140)
          .url()}
        alt={props.mainImage.alt}
      />
    </div>
  </Link>
)

export default ArtPreview
