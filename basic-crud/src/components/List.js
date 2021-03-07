import React, { useState } from 'react'
import uniqid from 'uniqid'

const List = () => {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [users, setUsers] = useState([])

  const addUser = e => {
    e.preventDefault()
    const newUser = {
      id: uniqid(),
      name,
      age,
    }
    setUsers([...users, newUser])
    setName('')
    setAge('')
  }

  return (
    <>
      <h2>Basic Crud App</h2>
      <div className="flex flex-row bg-gray-100">
        
        <div className="flex flex-auto">
          <div className="flex flex-col">
            <h2>List</h2>
            <div>
              <ul>
                {
                  users.map( item => (
                    <li key={item.id}>{item.name} ({item.age})</li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h2>Form</h2>
          <form onSubmit={addUser} className="block">
            <div>
              <span className="text-gray-700">Name</span>
              <input
                value={name}
                onChange={e => setName(e.target.value)}
                className="form-input py-2 px-4 m-4 block w-auto"
                type="text"
                placeholder="Name"
              />
            </div>
            <div>
              <span className="text-gray-700">Age</span>
              <input
                value={age}
                onChange={e => setAge(e.target.value)}
                className="form-input py-2 px-4 m-4 block w-auto"
                type="text"
                placeholder="Age"
              />
            </div>
            <div>
            <input
              className="btn-primary"
              type="submit"
              value="Register"
            />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default List
