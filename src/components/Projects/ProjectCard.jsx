import React from 'react'
import {
  JavaScriptIcon,
  TypeScriptIcon,
  GithubSvg,
  Arrow,
} from './ProjectIcons'

const ProjectCard = ({ project }) => {
  const tagCloud = project.topics.map((st, i) => {
    return (
      <span
        className="m-1 rounded-sm bg-red-900 p-1 text-sm font-thin text-gray-300"
        key={i}>
        {st}
      </span>
    )
  })

  const Stargazer = () => {
    return (
      <p className="flex">
        {project.stargazers_count > 0 ? '⭐ ' + project.stargazers_count : null}
      </p>
    )
  }

  return (
    <article className="my-8 mx-3 grid grid-cols-1 rounded-lg border-2 border-slate-700 bg-slate-800 p-4 shadow-sm hover:border-slate-900">
      <div className=" p-5">
        <div className="ml-3">
          <div className="flex items-center justify-start space-x-4 font-medium sm:text-lg md:flex-wrap">
            {' '}
            <a href={project.html_url} className="inline-flex">
              <GithubSvg />
            </a>
            <a href={project.html_url}>
              <h3 className="text-lg">{project.name}</h3>
            </a>
            <span className="mr-2">
              {(project.language === 'JavaScript' && <JavaScriptIcon />) ||
                (project.language === 'TypeScript' && <TypeScriptIcon />) ||
                (project.language && (
                  <span className="text-xs text-slate-500">
                    {project.language}
                  </span>
                ))}
            </span>
            <Stargazer />
            <a
              href={project.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start text-sm hover:text-red-700">
              Preview <Arrow />
            </a>
          </div>

          <div className="h-1/1 mt-4 overflow-auto rounded-lg bg-slate-700 p-2 shadow-xl ">
            <p className="text-md mt-2 py-3 text-gray-300">
              {project.description}
            </p>
          </div>

          <div className="flex items-center justify-between text-gray-500">
            <div className="mt-2 w-full space-x-4">{tagCloud}</div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
