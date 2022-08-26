import React from 'react'
import {
  VueIcon,
  ReactIcon,
  JavaScriptIcon,
  TypeScriptIcon,
} from './ProjectIcons'

const ProjectCard = ({ project }) => {
  const stackIcon = project.stack.map((st, i) => {
    return (
      <span key={i}>
        {st === 'vue' ? <VueIcon /> : st && st === 'react' ? <ReactIcon /> : st}
      </span>
    )
  })

  return (
    <li className="m-5 flex flex-row border-2 border-green-800 p-1">
      <img
        src="https://www.ted2xmen.dev/_next/image?url=%2Fstatic%2Feleventree.png&w=1200&q=75"
        className="w-48  object-cover"
        alt="eleventree scr"
      />
      <div className=" flex flex-col">
        <div className="m-4 flex">
          <h3 className="mr-4 text-xl font-bold">Name : {project.name}</h3>
          <div className="text-end space-x-2 text-xs">
            <button>Github</button> <button>Preview</button>
          </div>
        </div>
        <div className="m-6 text-sm"> {project.description} </div>
        <div className="m-6 flex items-center justify-end space-x-3 ">
          <span> {project.ts ? <TypeScriptIcon /> : <JavaScriptIcon />} </span>
          {stackIcon}
          <p>{project.category}</p>
        </div>
      </div>
    </li>
  )
}

export default ProjectCard
