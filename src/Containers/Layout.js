import React from 'react'
import AvailableFeatures from './AvailableFeatures'
import BussinessPlans from './BussinessPlans'
import ContactUsForm from './ContactUsForm'
import Footer from './Footer'
import Header from './Header'
import styles from '../css/Layout.module.css'

const Layout = () => {
  return (
    <div className={styles.initials}>
    <Header/>
    <BussinessPlans/>
    <AvailableFeatures/>
    <ContactUsForm/>
    <Footer/>
    </div>
  )
}

export default Layout