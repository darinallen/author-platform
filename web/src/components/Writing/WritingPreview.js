import { Link } from 'gatsby'
import React from 'react'
import { buildImageObj, cn, getWritingUrl } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'
import BlockText from '../block-text'

import styles from './WritingPreview.module.css'
import { responsiveTitle3 } from '../typography.module.css'

function WritingPreview (props) {
  return (
    <Link className={styles.root} to={getWritingUrl(props.releaseDate, props.slug.current)}>
      <div className={styles.leadMediaThumb}>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      </div>
      <h3 className={cn(responsiveTitle3, styles.title)}>{props.title}</h3>
      {props._rawExcerpt && (
        <div className={styles.excerpt}>
          <BlockText blocks={props._rawExcerpt} />
        </div>
      )}
    </Link>
  )
}

export default WritingPreview
