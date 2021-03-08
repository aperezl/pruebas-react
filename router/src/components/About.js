import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const About = () => {
  
  const [name, setName] = useState('John')
  useEffect(() => {
    setTimeout(() => { setName('Smith') }, 2000)
  })

  const { id } = useParams()
  return (
    <div>
      <h1>About us</h1>
      <p>{name}</p>
      <p>{id}</p>
    </div>
  )
}

export default About