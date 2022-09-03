import Search from '../Filters/Search'
import ProjectContainer from '../Projects/ProjectContainer'
import HeroSection from './HeroSection'

const AppContainer = () => {
  return (
    <div>
      <HeroSection /> 
      <Search />
      <ProjectContainer />
    </div>
  )
}

export default AppContainer
