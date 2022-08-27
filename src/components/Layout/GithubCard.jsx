import React, { useEffect, useState } from 'react'

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
    <div>
      <div className="m-3 flex flex-row flex-wrap justify-between">
        <div className="flex flex-col">
          <h1 className="bottom-26 relative text-5xl"> {user.name}</h1>
          <h2 className="ml-3 mt-3"> {user.bio} </h2>
          <h3 className="ml-2 mt-3">📍 {user.location} </h3>
        </div>
        <div className="m-2 flex-col items-center space-y-4 text-sm">
          <h3> Followers: {user.followers} </h3>
          <h3> Following: {user.following} </h3>
          <button className=" badge" href={user.html_url}>
            Github
          </button>
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
