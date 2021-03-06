import React, { useState } from 'react'

const BasicForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  return (
    <>
      <form>
        <input onChange={(e) => {setFirstName(e.target.value)}} placeholder="Firstname" type="text" />
        <input onChange={(e) => {setLastName(e.target.value)}} placeholder="Lastname" type="text" />
        <input type="submit" />
      </form>
    </>
  )
}

export default BasicForm
