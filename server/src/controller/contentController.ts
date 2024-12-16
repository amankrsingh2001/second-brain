import { Request,Response } from "express";
import { JwtPayload } from "jsonwebtoken";

import { asyncHandler } from "../utils/AsyncHandler";
import { ApiError } from "../utils/ApiError";
import { Content } from "../models/ContentModel";
import { ApiResponse } from "../utils/ApiResponse";
import { Link } from "../models/LinkModel";
import { random } from "../utils/random";
import { User } from "../models/UserModel";



interface AuthenticatedRequest extends Request {
    id?: string | JwtPayload
}


export const createContent = asyncHandler(async(req:Request, res:Response)=>{
        const userId = (req as AuthenticatedRequest).id
        const link = req.body.link
        const type = req.body.type


        const content = await Content.create({
            link:link,
            userId:userId,
            title:userId,
            type:type,
            tags:[]
        })

        if(!content._id){
            throw new ApiError(404, "Failed to add content", false)
        }

        res.status(200).json( new ApiResponse(true, "Content added", {}))
})




export const getContent = asyncHandler(async(req:Request, res:Response)=>{
    const userId = (req as AuthenticatedRequest).id
    const content = await Content.find({
        userId:userId
    }).populate("userId", "username")

    if(!content){
        throw new ApiError(404, "falied to get the content", false)
    }
    res.status(200).json(
        new ApiResponse(true, "Fetched content successfully", content)
    )
})



export const removeContent = asyncHandler(async(req:Request, res:Response)=>{
    const id = (req as  AuthenticatedRequest).id
    const contentId = req.body.contentId
    try{
        await Content.deleteMany({
            contentId,
            userId:id
        })
       }
     catch (error) {
        throw new ApiError(411, 'Something went wrong', false)        
    }
})


export const shareBrain = asyncHandler(async(req:Request, res:Response)=>{
    const {share} = req.body;
    const userId = (req as AuthenticatedRequest).id
    if(share){

        const existingUser = await Link.findOne({
            userId:userId
        })
        if(existingUser){
            res.json({
                hash:existingUser.hash
            })
        }
        const hash = random(10);
        await Link.create({
            userId : userId,
            hash: hash
        })
        res.status(200).json(
            new ApiResponse(true, "updated sharable link", {message:"/share/" + hash})   
        )
    }else{
       await Link.deleteOne({
            userId:userId
        })
    }    
})

export const shareBrainLink = asyncHandler(async(req:Request, res:Response)=>{
    try {
        const hash = req.params.shareLink
        const userId = (req as AuthenticatedRequest).id
        const link = await Link.findOne({
            hash
        })
    
        if(!link){
             throw new ApiError(411, "Incorrect input", false)
        }
    
        const content = await Content.find({
            userId:link.userId
        })
    
        const user = await User.findOne({
            userId:link.userId
        })
    
        if(!content || !user){
            throw new ApiError(411, "Incorrect data / User not found", false)
       }
    
        return res.status(200).json(
            new ApiResponse(true, "Content send successfully", {username:user?.username,content:content })
        )
    } catch (error) {
        throw new ApiError(500, "Something went wrong", false)
    }
})