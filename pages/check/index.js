import React from 'react'
import App from '../../components/algorithm'
import Footer from '../../components/layout/Footer'
import Navbar from '../../components/layout/Navbar'

export default function index() {
  return (
    <div>
      <Navbar active="Home"/>
      <App/>
      <Footer/>
    </div>
  )
}
