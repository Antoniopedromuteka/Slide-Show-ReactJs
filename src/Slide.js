

import React from 'react';
import styles from './Slide.module.css';

const Slide = ({slides}) => {
  return (
    <section className={styles.container}>
        {slides.map(slide=><div key={slide.id}>{slide.text}</div>)}
    </section>
  )
}

export default Slide;