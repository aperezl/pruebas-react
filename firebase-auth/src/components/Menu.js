import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <nav className="flex bg-white flex-wrap items-center justify-between p-4 shadow">
      <div className="navbar-menu hidden lg:order-1 lg:block w-full lg:w-2/5">
          <Link to="/" className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600" href="#">
              Home
          </Link>
          <Link to="/admin" className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600" href="#">
              Admin
          </Link>
      </div>
      <div className="navbar-menu hidden lg:order-3 lg:block w-full lg:w-2/5 lg:text-right">
          <Link to="/login" className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600" href="#">
              Login
          </Link>
      </div>
    </nav>
  )
}

export default Menu
