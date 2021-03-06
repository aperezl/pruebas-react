import React, { useState } from 'react'

const BasicForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const validate = event => {
    event.preventDefault()
    if (!firstName.trim()) {
      console.log('firstName is empty')
      return
    }
    if(!lastName.trim()) {
      console.log('lastName is empty')
      return
    }
    console.log('valid form')
  }
  return (
    <>
      <form onSubmit={validate}>
        <input onChange={ e => {setFirstName(e.target.value)}} placeholder="Firstname" type="text" />
        <input onChange={ e => {setLastName(e.target.value)}} placeholder="Lastname" type="text" />
        <input type="submit" />
      </form>
    </>
  )
}

export default BasicForm
