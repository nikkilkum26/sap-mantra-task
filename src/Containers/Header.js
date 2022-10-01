import React from 'react'
import styles from '../css/Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
            <div className={styles.header__inside}>
                <span className={styles.header_large_text}>Opalin</span>
                <span className={styles.header_small_text}>Home</span>
                <span className={styles.header_small_text}>Price</span>
                <span className={styles.header_small_text}>About</span>
            </div>
            <div className={styles.header__inside}>
                <span className={styles.header_small_text}>Log In</span>
                <button className={`${styles.btn_bg}`}>Sign Up</button>
            </div>
    </div>
  )
}

export default Header