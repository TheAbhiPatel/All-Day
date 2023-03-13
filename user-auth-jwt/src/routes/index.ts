import express from 'express'

import userRouter  from './userRoutes'

const router = express.Router()

router.get("/", (req, res) => {
    res.json({message:"hey this is the rotuer"})
})

router.use("/user", userRouter)


export default router ;