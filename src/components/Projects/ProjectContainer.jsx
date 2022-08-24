import React from 'react'
import projects from '../../data/projects'
import ProjectCard from './ProjectCard'
import { useSelector } from 'react-redux'

const ProjectContainer = () => {
  const kelime = useSelector((state) => state.main.kelime)

  return (
    <div>
      main store {kelime}
      <ul>
        {projects.map((project, i) => {
          return <ProjectCard key={i} project={project} />
        })}
      </ul>
    </div>
  )
}

export default ProjectContainer
