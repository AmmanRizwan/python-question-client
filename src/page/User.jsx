import React, { useEffect, useState } from "react";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import { FiAlertTriangle } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";

const User = () => {
  const [data, setData] = useState(null);
  const [deletePop, setDeletePopUp] = useState(false);

  useEffect(()  => {
    fetch('https://question-server-fpyn.onrender.com/api/data/', { method: "GET" })
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((err) => console.log("Error Fetching Data", err));
  })

  const handleDelete = async (keyId) => {
    try {
      const response = await fetch(`https://question-server-fpyn.onrender.com/api/data/${keyId}`,
        {
          method: "DELETE"
        }
      );
      const data = await response.json();
      setDeletePopUp(true);
    }

    catch(err) {
      console.log("Error Deleting Data", err);
    }
  }

  const [select, setSelect] = useState(null);

  const handleSelect = (getId) => {
    setSelect(getId === select ? null : getId);
  }

  return (
    <div className="min-h-screen text-white flex flex-col items-center">
      <div className="w-5/6">
        <div className="my-5">
          <h1 className="font-medium text-xl sm:text-4xl text-center elect-none">ALL PROGRAM STORED HERE</h1>
        </div>

        <div className="transition-all duration-500">
          {
            data && data.length > 0 ? <div>
              {
                data.map((data, index) => {
                  return (
                    <div key={index} className="mb-4">
                    <div onClick={() => handleSelect(data.id)} key={index} className={`${select === data.id ? "rounded-t-xl" : "rounded-xl"} select-none cursor-pointer bg-base-200 collapse-title text-md text-white flex justify-between items-center`}>
                      <div>{data.question}
                      </div>
                      <div className="flex gap-4"> {select === data.id ? <CgMathPlus size={24} /> : <CgMathMinus size={24} />}</div>
                    </div>
                    {
                      (select === data.id && data.code) ? 
                    <div className={`bg-base-300 collapse-title rounded-b-xl text-sm text-white flex justify-between items-center`}>
                      <div>
                          <pre><code>{data.code}</code></pre>
                        </div>
                        <div className="flex gap-4 sm:gap-6">
                          <FaTrash onClick={() =>{ handleDelete(data.id);}} className="cursor-pointer text-red-500" size={20} />
                        </div>
                      </div> : null
                    }
                    </div>
                  )
                })
              }
            </div> : <div className="my-6 flex flex-col justify-center items-center">
              <div><FiAlertTriangle size={34} className="text-red-500" /></div>
              <div className="mt-3 text-red-500 font-medium text-xl md:text-4xl">Data Not Found</div>
            </div>
          }
          <div></div>
          <div></div>
        </div>
      </div>
      {deletePop ? <div className="flex justify-center items-center min-h-screen fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-lg transition-all duration-600 shadow-xl">
        <div>
            <div role="alert" className="alert shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-info h-6 w-6 shrink-0">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div>
                <h3 className="font-bold">Code Delete Successfully!!</h3>
              </div>
              <button onClick={() => setDeletePopUp(false)} className="btn btn-sm">Close</button>
            </div>
        </div>
      </div> : null
      }
    </div>
  )
}

export default User;