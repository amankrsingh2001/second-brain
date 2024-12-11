import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
    link:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        enum:['image','video','audio', 'article'],
    },
    tags:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Tag"
        }
    ],
    title:{
        type:String,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        requried:true
    }
})


export const Content = mongoose.model("User", contentSchema)