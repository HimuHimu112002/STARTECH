import React from 'react'
import TopMenu from './TopMenu'
import NavMenu from './NavMenu'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
      <TopMenu/>
      <NavMenu/>
      <Outlet/>
    </>
  )
}

export default RootLayout