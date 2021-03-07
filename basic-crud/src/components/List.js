import React, { useState } from 'react'

const List = () => {
  return (
    <>
      <h2>Basic Crud App</h2>
      <div className="flex flex-row bg-gray-100">
        
        <div className="flex flex-auto">
          <h2>List</h2>
        </div>
        <div className="flex flex-col">
          <h2>Form</h2>
          <form className="block">
            <div>
              <span className="text-gray-700">Name</span>
              <input className="form-input py-2 px-4 m-4 block w-auto" type="text" placeholder="Name" />
            </div>
            <div>
              <span className="text-gray-700">Age</span>
              <input className="form-input py-2 px-4 m-4 block w-auto" type="text" placeholder="Age" />
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