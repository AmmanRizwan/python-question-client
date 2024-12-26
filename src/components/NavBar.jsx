import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../images/icon.png';
import { FaUpload, FaUser } from "react-icons/fa";


const NavBar = () => {
  const location = useLocation();

  const getBackground = (path) => {
    return location.pathname === path ? "bg-base-100" : "";
  }
  return (
      <div className="navbar bg-base-100">
        <div className="navbar-start">
            <Link to={'/user'}>
              <button className="btn btn-ghost btn-circle">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7" />
              </svg>
              </button>
            </Link>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl"><img className="w-6" src={logo} alt={"Python Logo"} /> Python Question</a>
        </div>
        <div className="navbar-end">
          <Link to={"/senddata"}>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
          </Link>
        </div>
      </div>
  )
}

export default NavBar;