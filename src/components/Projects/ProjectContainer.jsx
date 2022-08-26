import React from 'react'
// import projects from '../../data/projects'
import ProjectCard from './ProjectCard'
import { useSelector, useDispatch } from 'react-redux'
// import { setFilteredProjects, filteredProjects } from '../../redux/main'

const ProjectContainer = () => {
  const projects = useSelector((state) => state.main.projects)
  const tech = useSelector((state) => state.main.tech)
  const style = useSelector((state) => state.main.style)
  const string = useSelector((state) => state.main.string)

  return (
    <ul>
      {tech === 'all'
        ? projects?.filter((p) => p.name.toLowerCase().includes(string))
        : projects
            ?.filter((e) => e.stack.find((s) => s.includes(tech ?? style)))
            ?.filter((e) => e.stack.find((s) => s.includes(style)))
            ?.filter((p) => p.name.toLowerCase().includes(string))
            ?.map((project, i) => {
              return <ProjectCard key={i} project={project} />
            })}
    </ul>
  )
}

export default ProjectContainer
