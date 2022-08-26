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
      <div className="p-10 text-white shadow shadow-green-400">
        Home : from store: {tech} - {style}
      </div>
      <AppContainer />
    </PageLayout>
  )
}

export default HomePage
