import express from 'express'

const router = express.Router()

router.get("/signup", (req, res ) => {
    res.json({message:'this is user router '})
})
router.get("*", (req, res ) => {
    res.json({message:'Router not found'})
})


export default router ;