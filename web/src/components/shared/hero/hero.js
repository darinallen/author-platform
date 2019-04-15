import React from 'react'

import tanthony from './profile.png'
import styles from './hero.module.css'
import typography from '../../typography.module.css'

const Hero = () => (
  <div className={styles.hero}>
    <h1 className={`${typography.title1} ${styles.fullName}`}>
      <span className={styles.firstName}>T Anthony</span>
      <span className={styles.lastName}>Allen</span>
    </h1>
    <img className={styles.profileImage} src={tanthony} />
  </div>
)

export default Hero
