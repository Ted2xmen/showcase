import React from 'react'
// import projects from '../../data/projects'
import ProjectCard from './ProjectCard'
import { useSelector, useDispatch } from 'react-redux'
// import { setFilteredProjects, filteredProjects } from '../../redux/main'

const ProjectContainer = () => {
  const projects = useSelector((state) => state.main.projects)
  const tech = useSelector((state) => state.main.tech)
  const style = useSelector((state) => state.main.style)

  return (
    <ul>
      {projects
        ?.filter((e) => e.stack.find((s) => s.includes(tech)))
        .filter((e) => e.stack.find((s) => s.includes(style)))
        .map((project, i) => {
          return <ProjectCard key={i} project={project} />
        })}
    </ul>
  )
}

export default ProjectContainer
