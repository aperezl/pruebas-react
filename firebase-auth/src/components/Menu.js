import React, { useEffect, useState } from "react";
import { Auth } from "../firebase.config";
import { Link, useHistory } from "react-router-dom";

const Menu = () => {
  const [user, setUser] = useState(null);
  const history = useHistory();
  useEffect(() => {
    Auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user.email);
      }
    });
  }, []);
  const logout = async () => {
    await Auth.signOut();
    setUser(null);
    history.push("/");
  };
  return (
    <nav className="flex bg-white flex-wrap items-center justify-between p-4 shadow">
      <div className="navbar-menu hidden lg:order-1 lg:block w-full lg:w-2/5">
        <Link
          to="/"
          className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600"
          href="#"
        >
          Home
        </Link>
        {user ? (
          <Link
            to="/admin"
            className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600"
            href="#"
          >
            Admin
          </Link>
        ) : (
          <></>
        )}
      </div>
      <div className="navbar-menu hidden lg:order-3 lg:block w-full lg:w-2/5 lg:text-right">
        {user ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <Link
            to="/login"
            className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600"
            href="#"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Menu;
