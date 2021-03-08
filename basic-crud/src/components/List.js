import React, { useState } from 'react'
import uniqid from 'uniqid'

const List = () => {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [users, setUsers] = useState([])
  const [editMode, setEditMode] = useState(false)
  const [id, setId] = useState()
  const [error, setError] = useState(null)

  const addUser = e => {
    e.preventDefault()
    if (!name.trim()) {
      setError('Missing name field')
      return
    }
    const newUser = {
      id: uniqid(),
      name,
      age,
    }
    setUsers([...users, newUser])
    setName('')
    setAge('')
    setError(null)
  }

  const deleteUser = id => {
    const newUsers = users.filter( item => item.id !== id)
    setUsers(newUsers)
  }

  const edit = item => {
    setEditMode(true)
    setId(item.id)
    setName(item.name)
    setAge(item.age)
    console.log(item)
  }

  const editUser = e => {
    e.preventDefault()
    if (!name.trim()) {
      setError('Missing name field')
      return
    }
    const newUsers = users
    .map(item => item.id === id ? { id, name, age } : item)
    setUsers(newUsers)
    setName('')
    setAge('')
    setError(null)
    setEditMode(false)
  }

  return (
    <>
      <h2>Basic Crud App</h2>
      <div className="flex flex-row bg-gray-100">
        
        <div className="flex flex-auto">
          <div className="flex flex-col">
            <h2>List</h2>
            <div className="block flex">
              <ul className="w-full">
                {
                  users.map( item => (
                    <li className="flex felx-auto w-full block" key={item.id}>
                      {item.name} ({item.age})
                      <button onClick={() => {deleteUser(item.id)}} className="block float-right">[ x delete]</button>
                      <button onClick={() => {edit(item)}} className="block float-right">[ - edit]</button>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h2>Form</h2>
          <form onSubmit={editMode ? editUser : addUser} className="block">
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
              value={ editMode ? 'EDIT USER' : 'REGISTER USER' }
            />

            </div>
          </form>
          {
            error !== null ?
            (
              <div>{error}</div>
            ) :
            (
              <div></div>
            )
          }
        </div>
      </div>
    </>
  )
}

export default List
