import mongoose from "mongoose";
import { ApiError } from "../utils/ApiError";

export const dbConnect = ()=> {
    mongoose.connect(process.env.DB_URL as string).then(()=>{
        console.log('DB connected')
    }).catch((error:unknown)=>{
        throw new ApiError(500, "Db connection failed", false)
    })
}
