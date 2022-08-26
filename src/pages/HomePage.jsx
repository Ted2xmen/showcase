import AppContainer from '../components/Layout/AppContainer'
import PageLayout from '../components/Layout/PageLayout'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const HomePage = () => {
  const tech = useSelector((state) => state.main.tech)
  const style = useSelector((state) => state.main.style)
  const string = useSelector((state) => state.main.string)

  console.log('homepage', tech)

  return (
    <PageLayout>
      <div className="p-10 text-white shadow shadow-green-400">
        Home : from store: {tech} - {style} -- search : {string}
      </div>
      <AppContainer />
    </PageLayout>
  )
}

export default HomePage
