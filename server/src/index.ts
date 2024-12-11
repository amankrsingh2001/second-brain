import express from "express"
import { dbConnect } from "./config/db"
import dotenv from "dotenv"
import { mainRouter } from "./routes/mainRoute"

const app = express()
dotenv.config({
    path:'./.env'
})

dbConnect();


 
app.use(express.json())

app.use('/api/v1/', mainRouter)

app.listen(3000, ()=>{
    console.log("App is on")
})