import React from "react";
import landing_image from '../images/img-1.png';
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-5/6">
      <div className="flex flex-col-reverse gap-10 lg:flex-row md:justify-between items-center">
      <div>
        <h1 className="my-5 text-3xl font-bold text-white">Your Ultimate Resource for Python Questions!</h1>
        <p>Explore a wide range of Python questions and answers to boost your coding skills. Whether you're just starting or looking to sharpen your expertise, our resources will help you tackle challenges with ease and confidence.</p>
       <Link to='/python'><button className="btn btn-wide my-5 rounded-full items-center flex mt-10">Get Started <BiChevronRight size={24}/></button></Link>
      </div>
      <div className="lg:w-3/2">
        <img src={landing_image} alt="" className="rounded-md object-center" />
      </div>
      </div>
      </div>
    </div>
  )
}

export default LandingPage;