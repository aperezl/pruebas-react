import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

const Users = () => {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    setUsers(users)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div>
      <h2>User list</h2>
      {
        users.map(user => (
          <div key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </div>
        ))
      }

    </div>
  )
}

export default Users
