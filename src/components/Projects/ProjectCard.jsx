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
        className="rounded-lg bg-red-900 p-1 text-xs font-thin text-main"
        key={i}>
        {st}
      </span>
    )
  })

  return (
    <article className="my-8 rounded-lg border-2 border-slate-700 bg-slate-800 p-4 shadow-sm hover:border-slate-900">
      <div className="flex items-start p-5">
        <a href={project.html_url}>
          <GithubSvg />
        </a>

        <div className="ml-5">
          <div className="flex items-center justify-start space-x-4 font-medium sm:text-lg">
            <a href={project.html_url}>
              <h3 className="project-title">{project.name}</h3>
            </a>
            <span className="mr-3">
              {(project.language === 'JavaScript' && <JavaScriptIcon />) ||
                (project.language === 'TypeScript' && <TypeScriptIcon />) ||
                (project.language && (
                  <span className="text-xs text-slate-500">
                    {project.language}
                  </span>
                ))}
            </span>

            <p className="items-end">
              {project.stargazers_count > 0
                ? '⭐ ' + project.stargazers_count
                : null}
            </p>
            <a
              href={project.homepage}
              className="flex items-start text-sm hover:text-red-700">
              Preview <Arrow />
            </a>
          </div>
          <div className="mt-4 h-32 w-full overflow-auto rounded-lg bg-slate-700 p-2 shadow-xl ">
            <p className="mt-2 text-sm text-gray-300">
              {project.description} Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Aspernatur nemo sed cum minus autem perspi
            </p>
          </div>

          <div className="mt-2 sm:flex sm:items-center sm:gap-2">
            <div className="flex items-center justify-between text-gray-500">
              <div className="space-x-4">{tagCloud}</div>
              <div className="text-xs font-thin">
                <p>{project.license?.name}</p>
                <p>{project.created_at}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
