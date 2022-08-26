import React from 'react'
import ProjectCard from './ProjectCard'
import { useSelector } from 'react-redux'
import { useAutoAnimate } from '@formkit/auto-animate/react'

const ProjectContainer = () => {
  const projects = useSelector((state) => state.main.projects)
  const tech = useSelector((state) => state.main.tech)
  const style = useSelector((state) => state.main.style)
  const string = useSelector((state) => state.main.string)

  const [parent] = useAutoAnimate(/* optional config */)

  return (
    <ul ref={parent}>
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
