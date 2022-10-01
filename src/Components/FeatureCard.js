import React from 'react'

const FeatureCard = ({styles,eachFeature}) => {
  return (
    <div className={styles.card}>
    <div className={`${styles.card__logo} `}>
    <div className={styles[eachFeature.logo]}>
    </div>
    </div>
    <div className={styles.card__title}>{eachFeature.title}</div>
    <div className={styles.card__content}>{eachFeature.content}</div>
  </div>
  )
}

export default FeatureCard