import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Default = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        {/* <Footer/> */}
    </>
  )
}

export default Default