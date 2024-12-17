import React from "react";
import { BsSend } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
import logo from '../images/icon.png';


const NavBar = () => {
  return (
    <div className="text-white flex justify-between p-4 px-5  bg-blue-600 items-center mb-10">
      <Link to={'/user'}><div className="cursor-pointer"><VscAccount size={24} /></div></Link>
      <Link to={'/'}><div className="font-medium text-md sm:text-xl flex items-center gap-2"><img src={logo} alt="python" className="w-10" /> TUTORIAL QUESTION</div></Link>
      <Link to={'/senddata'}><div className="cursor-pointer"><BsSend size={24} /></div></Link>
    </div>
  )
}

export default NavBar;