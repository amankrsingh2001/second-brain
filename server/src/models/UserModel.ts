import mongoose from "mongoose";



const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    content:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Content'
            
        }

    ]

})

export const User =  mongoose.model("User", userSchema);