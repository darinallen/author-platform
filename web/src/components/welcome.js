import React from 'react'

import styles from './welcome.module.css'

const Container = () => {
  return (
    <div className={styles.root}>
      <h1>Welcome</h1>
      <p>
        Hello, and thank you for stopping by my website. This is a place where I will share recent
        creative works, including books, short stories, blog posts, and art (coming soon). My
        writing covers a variety of genres, but I often weave in science fiction and fantasy themes.
        Blog posts cover everything from technology to politics and world events. Please feel free
        to drop me a note, and thanks so much for your interest!
      </p>
    </div>
  )
}

export default Container
