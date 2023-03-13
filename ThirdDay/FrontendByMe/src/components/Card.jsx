import React from 'react'
import { FiEdit } from 'react-icons/fi';
import { AiFillDelete } from 'react-icons/ai';
import moment from 'moment'

const card = ({note, setNotes, notes, setEditData, setShowCreate}) => {


  const DeleteNote = async(id) => {

    await fetch(`http://localhost:5000/notes/delete/${id}`, {
      method:'DELETE'
    })
    const newNotes =  notes.filter((note) => note._id != id)
    setNotes(newNotes)
    

  }

  const editNote = () => {
    setEditData(note)
    setShowCreate(true)
  }





  return (
    <div className='bg-black text-white border border-gray-100 p-2 flex flex-col gap-2 min-h-[12rem]'>
      <div className='h-[92%]'>
      <div className='flex justify-between'>
      <span className='text-2xl font-semibold'>{note.title}</span>
      <div className='flex gap-4 text-2xl '>
      <FiEdit 
        onClick={editNote}
      className='cursor-pointer hover:text-green-600'/>
      <AiFillDelete 
        onClick={()=> DeleteNote(note._id)}
      className='cursor-pointer hover:text-[#fa4f31]'/>
      </div>

      </div>
      <span className='text-md text-slate-300'> {note.text}</span>
      </div>

      <span className='text-xs text-gray-400'>{moment(note.updatedAt).fromNow()}</span>

      




    </div>
  )
}

export default card