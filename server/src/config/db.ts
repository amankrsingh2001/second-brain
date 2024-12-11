import mongoose from "mongoose";

export const dbConnect = ()=> {
    mongoose.connect(process.env.DB_URL as string).then(()=>{
        console.log('DB connected')
    }).catch((error:unknown)=>{
        // throw new 
    })

}
