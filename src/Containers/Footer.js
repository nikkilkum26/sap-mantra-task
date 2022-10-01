import React from 'react'
import Styles from '../css/Footer.module.css'

const Footer = () => {
  return (
    <div className={Styles.layout}>
      <div className={Styles.layout__child}>
        <span className={Styles.title}>Opalin</span>
        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>

      </div>
      <div className={Styles.layout__child}>
      <span className={Styles.title}>Info</span>
      <span>Getting Started</span>
      <span>Resources</span>
      <span>Design</span>
      <span>Tutorials</span>
      </div>
      <div className={Styles.layout__child}>
      <span className={Styles.title}>Support</span>
      <span>Documentation</span>
      <span>Requirements</span>
      <span>Liscense</span>
      <span>Updates</span>
      </div>
      <div className={Styles.layout__child}>
      <span className={Styles.title}>Connect</span>
      <span>Twitter</span>
      <span>Facebook</span>
      <span>Instagram</span>
      </div>

    </div>
  )
}

export default Footer