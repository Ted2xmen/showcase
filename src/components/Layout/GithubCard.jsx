import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const GithubCard = () => {
  const githubDataExample = useSelector((state) => state.main.githubExample)

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
      <div className="bg-green-900 p-10">{user.name}</div>
    </div>
  )
}

export default GithubCard
