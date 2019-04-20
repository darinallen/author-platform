import React from 'react'

import tanthony from './tanthony.png'
import styles from './hero.module.css'
import typography from '../../typography.module.css'

const Hero = () => (
  <div className={styles.hero}>
    <img className={styles.headshot} src={tanthony} />
    <div className={styles.text}>
      <h1 className={`${typography.title1} ${styles.fullName}`}>
        <span className={styles.firstName}>T Anthony </span>
        <span className={styles.lastName}>Allen</span>
      </h1>
      <h2 className={styles.subtitle}>Science Fiction, Slice of Life & Short Stories</h2>
    </div>
  </div>
)

export default Hero
