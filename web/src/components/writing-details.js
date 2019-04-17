import { format, distanceInWords, differenceInDays } from 'date-fns'
import React from 'react'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockContent from './block-content'
import Container from './container'
import RoleList from './role-list'

import styles from './writing-details.module.css'

function WritingDetails (props) {
  const { _rawDescription, _rawExcerpt, authors, categories, title, mainImage, releaseDate } = props
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
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>
            {_rawDescription && <BlockContent blocks={_rawDescription} />}
            <hr />
            {_rawExcerpt && <BlockContent blocks={_rawExcerpt} />}
          </div>
          <aside className={styles.metaContent}>
            {releaseDate && (
              <div className={styles.releaseDate}>
                {differenceInDays(new Date(releaseDate), new Date()) > 3
                  ? distanceInWords(new Date(releaseDate), new Date())
                  : format(new Date(releaseDate), 'MMMM Do YYYY')}
              </div>
            )}
            {authors && <RoleList items={authors} title='Authors' />}
            {categories && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Categories</h3>
                <ul>
                  {categories.map(category => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </div>
  )
}

export default WritingDetails
