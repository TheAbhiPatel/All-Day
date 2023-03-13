import { RequestHandler } from "express";
import NoteModel from "../models/note";

export const getNotes: RequestHandler = async(req, res, next) => {

    try {
        const notes = await  NoteModel.find().sort({updatedAt:-1})

    res.status(200).json(notes)
    } catch (error) {
        next(error)
    }
    
}
export const getNote: RequestHandler = async(req, res, next) => {


    try {
        const noteId = req.params.noteId
        const note = await NoteModel.findById(noteId)
        if(note){
            res.status(200).json(note)
            
        }else{
            res.status(404).json({message:'not found'})

        }
    } catch (error) {
        next(error)
    }
    
}

export const createNotes:RequestHandler = async(req, res, next) => {
    try {
        const title = req.body.title;
        const text = req.body.text;

        const newNote = await NoteModel.create({
            title,
            text
        })

        // await newNote.save()

        res.status(201).json(newNote)
        
    } catch (error) {
        next(error)
    }
}


export const updateNote: RequestHandler = async(req, res, next) => {


    try {
        const noteId = req.params.noteId
        const note = await NoteModel.findByIdAndUpdate(noteId, req.body, {new:true})
        if(note){
            res.status(200).json(note)
            
        }else{
            res.status(404).json({message:'not found'})

        }

    } catch (error) {
        next(error)
    }
    
}
export const deleteNote: RequestHandler = async(req, res, next) => {


    try {
        const noteId = req.params.noteId
        const note =  await NoteModel.findByIdAndDelete(noteId)
        if(note){
            res.status(200).json({message:'note deleted successfully'})

        }else{
            res.status(404).json({message:'not found'})
        }
    } catch (error) {
        next(error)
    }
    
}
