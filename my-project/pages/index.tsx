import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import { useState } from 'react'
import MobileNav from '@/components/MobileNav'

const Homepage = () => {

  const [nav, setNav] = useState(false)
  const openNav = () => setNav(true)
  const closeNav = () => setNav(false)

  return (
    <div className="overflow-x-hidden">
      <div>
        {/* Navigation Bars */}
        <MobileNav nav={nav} closeNav={closeNav}/>
        <Nav openNav={openNav}/>
        {/* Hero Section */}
        <Hero/>
      </div>
    </div>
  )
}

export default Homepage
