import express from 'express'
import {getNotes,getNote, createNotes, updateNote, deleteNote}  from '../controller/notes'

const router  = express.Router();

router.get("/", getNotes)
router.get("/:noteId", getNote)
router.post("/", createNotes)
router.patch("/update/:noteId", updateNote)
router.delete("/delete/:noteId", deleteNote)


export default router