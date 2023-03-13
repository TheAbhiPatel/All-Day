import React, { useEffect, useState } from "react";

const url = "http://localhost:5000/notes";

const Create = ({ setShowCreate, editData }) => {


  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    
    if (editData) {
      setFormData(editData);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editData) {
      const id = editData._id;
      const response = await fetch(`${url}/notes/update/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const res = await response.json();
      setShowCreate(false);

    } else {
      const response = await fetch(`${url}/notes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const res = await response.json();

      setShowCreate(false);
    }
  };

  return (
    <div className="w-full h-full absolute flex justify-center items-center  ">
      <div
        onClick={() => setShowCreate(false)}
        className="absolute h-full w-full bg-[#000000d2]"
      ></div>

      <div className="text-white bg-[#171717] min-h-[25rem] min-w-[25rem] border border-gray-400 shadow-2xl p-5 z-30 ">
        <span className="text-3xl text-center"> Create Note</span>

        <form className="flex flex-col gap-5 mt-10 ">
          <span>Title</span>
          <input
            type="text"
            name="title"
            value={formData.title || ""}
            placeholder="title"
            onChange={handleChange}
            className="bg-transparent border border-gray-300 focus:outline-none p-2 rounded-md"
          />
          <span>Note</span>
          <textarea
            name="text"
            value={formData.text || ""}
            onChange={handleChange}
            cols="3"
            rows="5"
            placeholder="write a note here"
            className="bg-transparent border border-gray-300 focus:outline-none p-2 rounded-md"
          ></textarea>

          <button
            onClick={handleSubmit}
            className="p-2 px-4 bg-black rounded-md"
          >
            add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
