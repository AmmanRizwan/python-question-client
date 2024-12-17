import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
import { CgClose } from "react-icons/cg";

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
        console.log(result.message);
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
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="flex flex-col ">
            <label className="text-xl sm:text-2xl my-4">Question:</label>
            <input type="text" value={formData.question} onChange={(e) => setFormData({...formData, question: e.target.value})} placeholder="Enter the Question" className="bg-slate-700 text-yellow-600 pl-4 rounded-xl text-xl sm:text-2xl py-3 border-0 outline-none focus:outline-yellow-600 focus:border-none"  />
          </div>

          <div className="flex flex-col ">
            <label className="text-xl sm:text-2xl my-4">Code:</label>
            <textarea type="text" value={formData.code} onChange={(e) => setFormData({...formData, code:e.target.value})} placeholder="Enter the Code" className="bg-slate-700 text-yellow-600 pl-4 rounded-xl text-xl sm:text-2xl py-3 h-96 border-0 outline-none focus:outline-none focus:outline-yellow-600 focus:border-none" />
          </div>
         <button type="submit" className="flex justify-center items-center gap-3 text-white py-3 px-7 bg-indigo-500 rounded-full text-xl mt-4 hover:bg-indigo-600 transition-all duration-500 active:bg-indigo-700">Submit <BsSend /></button>
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