import express from "express"
import { userRouter } from "./userRoute"
import { contentRouter } from "./contentRoute"

const mainRouter =  express.Router()

mainRouter.use('/user', userRouter)
mainRouter.use('/content', contentRouter)



export {mainRouter}