import React, { useEffect, useState } from 'react'
import { GithubSvg, LinkedinSvg } from '../Projects/ProjectIcons'

const GithubCard = () => {
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
    <div className="flex items-center justify-between sm:flex-col md:flex-col ">
      <div className="flex flex-col">
        <h1 className="bottom-26 relative text-5xl"> {user.name}</h1>
        <h2 className="ml-3 mt-3"> {user.bio} </h2>
        <h3 className="ml-2 mt-3">📍 {user.location} </h3>
      </div>

      <div className="m-2 flex-col items-center space-y-4 text-sm">
        <h3> Followers: {user.followers} </h3>
        <h3> Following: {user.following} </h3>
        <a
          rel="noreferrer noopener"
          className="mr-2 inline-block rounded-lg  bg-background p-2"
          href={user.html_url}
          target="_blank">
          <GithubSvg />
        </a>
        <a
          rel="noreferrer noopener"
          className="inline-block rounded-lg bg-background  p-2"
          href="https://www.linkedin.com/in/tugrulerdemdogru/"
          target="_blank">
          <LinkedinSvg />
        </a>
      </div>
    </div>
  )
}

export default GithubCard
