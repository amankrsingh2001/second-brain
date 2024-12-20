import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    type:{
        type:String,
        enum:['image', 'video', 'audio', 'article', 'youtube', "twitter"],
    },
    tags:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Tag"
        }
    ],
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        requried:true
    }
})


export const Content = mongoose.model("User", contentSchema)