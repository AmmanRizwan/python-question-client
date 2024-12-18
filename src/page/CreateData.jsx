import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaCheck } from "react-icons/fa";

const CreateData = () => {
  const [formData, setFormData] = useState({question: "", code: ""});
  const [popUp, setPopUp] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://question-server-fpyn.onrender.com/api/data",
        {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(formData)
        });
        const result = await res.json();
        setFormData({question: "", code: ""});
        setPopUp(true);
    }
    catch (err) {
      console.log("Error Posting Data", err);
    }
  }

  return (
    <>
    <div className="text-white min-h-screen flex justify-center">
      <div className="w-5/6">


      <div className="text-xl sm:text-3xl text-center py-4 font-bold">SEND AN ANSWER WITH QUESTION</div>
        <form onSubmit={(e) => handleSubmit(e)} className="mb-20">
          <div className="flex flex-col ">
            <label className="text-xl sm:text-2xl my-4">Question:</label>
            <input type="text" value={formData.question} onChange={(e) => setFormData({...formData, question: e.target.value})} placeholder="Enter the Question" className="bg-[#2F2D29] text-white pl-4 rounded-xl text-md sm:text-lg py-3 border-0 outline-none placeholder-text-white"  />
          </div>

          <div className="flex flex-col ">
            <label className="text-xl sm:text-2xl my-4">Code:</label>
            <textarea type="text" value={formData.code} onChange={(e) => setFormData({...formData, code:e.target.value})} placeholder="Enter the Code" className="bg-[#2F2D29] text-white pl-4 rounded-xl text-md sm:text-lg py-3 h-96 border-0 outline-none focus:outline-none" />
          </div>
         <button type="submit" className="flex justify-center items-center gap-3 text-black py-3 px-7 bg-white rounded-full text-md mt-4 font-semibold hover:bg-[#2F2D29] hover:text-white transition-all duration-500 active:bg-white">Submit <FaCheck /></button>
        </form>
      </div>
    </div>
    {popUp ? <div className="flex justify-center items-center min-h-screen fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-lg transition-all duration-600 shadow-xl">
        <div>
          <div className="flex gap-5 items-center text-violet-500 bg-white py-4 px-6 rounded-xl font-medium text-xl">Code Save Successfully!!<CgClose onClick={() => setPopUp(false)} className="text-red-500 font-bold cursor-pointer hover:text-red-700 hover:bg-slate-300 transition-all duration-500 rounded-full py-3 px-3 " size={50} /></div>
        </div>
      </div> : null
      }
    </>
  )
}

export default CreateData;