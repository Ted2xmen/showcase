import AppContainer from '../components/Layout/AppContainer'
import PageLayout from '../components/Layout/PageLayout'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const HomePage = () => {
  const tech = useSelector((state) => state.main.tech)
  const style = useSelector((state) => state.main.style)

  console.log('homepage', tech)

  return (
    <PageLayout>
      <div className="bg-orange-900 p-10 text-white">
        Home : from store: {tech} - {style}
      </div>
      <AppContainer />
    </PageLayout>
  )
}

export default HomePage
