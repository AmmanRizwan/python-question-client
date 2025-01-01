import React from "react";
import logo from '../images/icon.png';

const Nav = () => {
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
    </div>
    <div className="navbar-center">
      <div className="btn btn-ghost text-xl"><img className="w-6" src={logo} alt={"Python Logo"} /> Python Question</div>
    </div>
    <div className="navbar-end">
    </div>
  </div>
  )
}

export default Nav;