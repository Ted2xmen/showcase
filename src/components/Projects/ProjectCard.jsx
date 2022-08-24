import React from 'react'

const ProjectCard = ({ project }) => {
  return (
    <li className="m-5 border-2 border-green-800 p-5">
      <h3>{project.name}</h3>
      {project.stack.map((st, i) => {
        return (
          <span className="m-2 rounded-md bg-red-600 p-1 text-white" key={i}>
            {st}
          </span>
        )
      })}
    </li>
  )
}

export default ProjectCard
