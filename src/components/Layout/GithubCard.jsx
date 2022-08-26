import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const GithubCard = () => {
  const [user, setUser] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://api.github.com/users/ted2xmen')
      const data = await response.json()
      console.log(data)
      setUser(data)
    }
    getData()
  }, [])

  return (
    <div>
      <div className="flex flex-row justify-center">
        <div className="h-12 w-12 flex-1 bg-red-300"></div>
        <div className="h-12 w-12 flex-1 bg-green-300"></div>
        <div className="h-12 w-12 flex-1  bg-yellow-300"></div>
        <div className="h-12 w-12  bg-green-600">True</div>
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
