import React, { useState } from 'react'

const List = () => {
  const [numbers] = useState([1, 2, 3, 4, 5, 6])
  return (
    <>
      <ul>
        {
          numbers.map((item, index) => <li key={index}>{index}.- {item}</li>)
        }
      </ul>
    </>
  )
}

export default List
