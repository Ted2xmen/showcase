import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export const GithubSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-brand-github"
      width="34"
      height="34"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
    </svg>
  )
}

const GithubCard = () => {
  const repo = useSelector((state) => state.main.repo) // from thunk

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

// <div className="flex flex-col ">
//       <h2> {user.name}</h2>
//       <p> {user.bio} </p>
//       <h3> {user.blog} </h3>
//       <h3> {user.followers} </h3>
//       <h3> {user.following} </h3>
//       <h3> {user.html_url} </h3>
//       <h3> {user.location} </h3>
//       <h3> {user.hireable ? 'true' : 'false'} </h3>
//       <h3> {user.public} </h3>
//     </div>
