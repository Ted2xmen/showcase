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
      <div className="flex flex-col bg-green-900 p-10">
        <h2> {user.name}</h2>
        <p> {user.bio} </p>
        <h3> {user.blog} </h3>
        {/* <img src={user.avatar_url} width="200px" alt="" /> */}
        <h3> {user.followers} </h3>
        <h3> {user.following} </h3>
        <h3> {user.html_url} </h3>
        <h3> {user.location} </h3>
        <h3> {user.hireable ? 'true' : 'false'} </h3>
        <h3> {user.public} </h3>
      </div>
    </div>
  )
}

export default GithubCard
