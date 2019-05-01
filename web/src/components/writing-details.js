import { format, distanceInWords, differenceInDays } from 'date-fns'
import React from 'react'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockContent from './block-content'
import Container from './container'
import Button from './shared/buttons/button'
import ButtonLink from './shared/buttons/button-link'

import styles from './writing-details.module.css'

function WritingDetails (props) {
  const { _rawDescription, _rawExcerpt, categories, title, mainImage, releaseDate } = props

  const formattedReleaseDate =
    differenceInDays(new Date(releaseDate), new Date()) > 3
      ? distanceInWords(new Date(releaseDate), new Date())
      : format(new Date(releaseDate), 'MMMM Do, YYYY')

  return (
    <div className={styles.root}>
      {mainImage && mainImage.asset && (
        <div className={styles.mainImage}>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit('crop')
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )}
      <Container>
        <div className={styles.mainContent}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.details}>
            {releaseDate && (
              <span className={styles.releaseDate}>{`Released: ${formattedReleaseDate}`}</span>
            )}
            {categories && (
              <div className={styles.categories}>
                <span>{'Categories: '}</span>
                <ul className={styles.categoriesList}>
                  {categories.map(category => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {_rawDescription && <BlockContent blocks={_rawDescription} />}
          <div className={styles.buttons}>
            <ButtonLink color='primary'>Buy Now</ButtonLink>
            <Button color='accent'>Read Excerpt</Button>
          </div>
          {_rawExcerpt && <BlockContent blocks={_rawExcerpt} />}
        </div>
      </Container>
    </div>
  )
}

export default WritingDetails
