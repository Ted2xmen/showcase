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
      <AppContainer />
    </PageLayout>
  )
}

export default HomePage
