import React from 'react'
import ProjectCard from './ProjectCard'
import { useSelector } from 'react-redux'
import { useAutoAnimate } from '@formkit/auto-animate/react'

const ProjectContainer = () => {
  const portfolio = useSelector((state) => state.main.portfolio)

  const tech = useSelector((state) => state.main.tech)
  const string = useSelector((state) => state.main.string)

  const [parent] = useAutoAnimate(/* optional config */)

  return (
    <ul ref={parent}>
      {tech === 'all'
        ? portfolio?.filter((p) => p.name.toLowerCase().includes(string))
        : portfolio
            // ?.filter((e) => e.stack.find((s) => s.includes(tech ?? style)))
            // ?.filter((e) => e.stack.find((s) => s.includes(style)))
            ?.filter((f) => f.topics.includes('portfolio'))
            ?.filter((p) => p.name.toLowerCase().includes(string))
            ?.map((project, i) => {
              return <ProjectCard key={i} project={project} />
            })}
    </ul>
  )
}

export default ProjectContainer
