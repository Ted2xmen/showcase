import AppContainer from '../components/Layout/AppContainer'
import PageLayout from '../components/Layout/PageLayout'
import { useSelector } from 'react-redux'

const HomePage = () => {
  return (
    <PageLayout>
      <AppContainer />
    </PageLayout>
  )
}

export default HomePage
