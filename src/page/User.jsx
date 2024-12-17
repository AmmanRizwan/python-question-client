import React, { useEffect, useState } from "react";
import { CgClose, CgMathPlus, CgRemove } from "react-icons/cg";
import { FiAlertTriangle } from "react-icons/fi";

const User = () => {
  const [data, setData] = useState(null);

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
      console.log(data.message);
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
    <div className="min-h-screen text-white flex flex-col justify-center items-center">
      <div className="w-5/6">
        <div className="my-5">
          <h1 className="font-medium text-xl sm:text-4xl text-center elect-none">ALL PROGRAM STORED HERE</h1>
        </div>

        <div>
          {
            data && data.length > 0 ? <div>
              {
                data.map((data, index) => {
                  return (
                    <div key={index}>
                    <div onClick={() => handleSelect(data.id)} key={index} className="rounded-xl select-none cursor-pointer bg-violet-600 py-4 px-6 my-3 text-xl sm:text-2xl font-semibold text-white flex justify-between items-center ">
                      <div>{data.question}
                      </div>
                      <div className="text-yellow-500 flex gap-4"> {select === data.id ? <CgMathPlus size={24} /> : <CgClose size={24} />}</div>
                    </div>
                    {
                      (select === data.id && data.code) ? <div className="bg-slate-600 px-6 py-4 rounded-xl text-xl sm:text-2xl text-yellow-500 select-none flex justify-between items-center">
                        <div><pre><code>{data.code}</code></pre></div>
                        <div className="flex gap-4 sm:gap-6">
                          <CgRemove onClick={() => handleDelete(data.id)} className="cursor-pointer text-red-500" size={24} />
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
    </div>
  )
}

export default User;