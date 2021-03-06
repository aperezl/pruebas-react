import React, { useState } from 'react'

const IsLogged = () => {
  
  const [isLogged, setIsLogged] = useState(false)
  const login = () => setIsLogged(true)
  const logout = () => setIsLogged(false)

  return (
    <>
      <h2>User Status: ({isLogged ? 'registed' : 'anonymous'})</h2>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </>
  )
}

export default IsLogged
