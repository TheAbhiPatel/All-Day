import { useEffect, useState } from "react";
import Card from "./components/Card";
import Create from "./components/Create";

const url = "http://localhost:5000/notes";
function App() {
  const [notes, setNotes] = useState();
  const [showCreate, setShowCreate] = useState(false);
  const [editData, setEditData] = useState('')

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const note = await response.json();
      setNotes(note);
    };
    fetchNotes();
  }, [notes]);

  return (
    <div className="main-container relative w-full bg-slate-900 h-[100vh]">
      {showCreate && <Create setShowCreate={setShowCreate} editData={editData} />}

      <nav className="flex justify-between text-white p-5 bg-black">
        <div className="text-3xl font-bold">Notes</div>
        <div className="mr-5">
          <span
            onClick={() => setShowCreate((prev) => !prev)}
            className="bg-slate-900 p-2 px-3 rounded-full hover:bg-black border border-gray-300 cursor-pointer"
          >
            create +
          </span>
        </div>
      </nav>

      <div className="card-container p-5 grid grid-cols-3 gap-10">
        {notes?.map((note, idx) => (
          <Card note={note} key={idx} setNotes={setNotes} notes={notes} setEditData={setEditData} setShowCreate={setShowCreate} />
        ))}
      </div>
    </div>
  );
}

export default App;
