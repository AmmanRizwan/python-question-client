import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../images/icon.png';
import { FaUpload, FaUser } from "react-icons/fa";


const NavBar = () => {
  const location = useLocation();

  const getBackground = (path) => {
    return location.pathname === path ? "bg-[#211F1D]" : "";
  }
  return (
    <div className="text-white flex justify-between p-4 px-5 bg-[#2F2D29] items-center mb-10 transition-all duration-500">
      <Link className={`${getBackground('/user')} rounded-3xl p-3`} to={'/user'}><div className={`cursor-pointer`}><FaUser size={24} /></div></Link>
      <Link to={'/'}><div className="font-medium text-sm sm:text-xl flex items-center gap-2"><img src={logo} alt="python" className="w-6 sm:w-10" /> TUTORIAL QUESTION</div></Link>
      <Link className={`${getBackground('/senddata')} rounded-3xl p-3`} to={'/senddata'}><div className={`cursor-pointer`}><FaUpload size={24} /></div></Link>
    </div>
  )
}

export default NavBar;