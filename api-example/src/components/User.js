import React, { useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'


const User = () => {
  const [user, setUser] = useState({})
  const { id } = useParams()
  const getUser = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const user = await response.json()
    setUser(user)
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <div>
      <h2>User</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <small>
        Phone: {user.phone}
      </small>
    </div>
  )
}

export default User
