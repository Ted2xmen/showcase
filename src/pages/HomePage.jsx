import AppContainer from '../components/Layout/AppContainer'
import Nav from '../components/Layout/Nav'

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <Nav />
      <div className="mx-auto max-w-4xl sm:max-w-2xl sm:bg-yellow-400">
        <AppContainer />
      </div>
    </div>
  )
}

export default HomePage
