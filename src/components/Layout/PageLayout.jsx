import React from 'react'
import HeroSection from './HeroSection'
import Nav from './Nav'

const PageLayout = ({ children }) => {
  return (
    <div className="mx-auto max-w-5xl">
      <Nav />
      <HeroSection />
      <div className="mx-auto max-w-4xl pt-12">{children}</div>
    </div>
  )
}

export default PageLayout
