import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { GithubSvg } from '../Projects/ProjectIcons'

const GithubCard = () => {
  const repo = useSelector((state) => state.main.repo)

  const [user, setUser] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://api.github.com/users/ted2xmen')
      const data = await response.json()
      setUser(data)
    }
    getData()
  }, [])

  return (
    <div>
      <div className="m-3 flex flex-row flex-wrap justify-between">
        <div className="flex flex-col">
          <h1 className="bottom-26 relative text-5xl"> {user.name}</h1>
          <h2 className="ml-3 mt-3"> {user.bio} </h2>
          <h3 className="ml-2 mt-3">📍 {user.location} </h3>
        </div>
        <div className="flex flex-col items-end opacity-25 ">
          <ul>
            <h3>Latest Stars</h3>
            {repo.slice(0, 5).map((r, i) => (
              <li className="mt-1 text-xs font-thin text-slate-300" key={i}>
                ⭐ {r.full_name}
              </li>
            ))}
          </ul>
        </div>
        <div className="m-2 flex-col items-center space-y-4 text-sm">
          <h3> Followers: {user.followers} </h3>
          <h3> Following: {user.following} </h3>
          <a
            rel="noreferrer noopener"
            className="inline-block rounded-lg  bg-background p-2"
            href={user.html_url}
            target="_blank">
            <GithubSvg />
          </a>
        </div>
      </div>
    </div>
  )
}

export default GithubCard
