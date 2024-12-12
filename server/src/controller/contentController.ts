import { Request,Response } from "express";
import { JwtPayload } from "jsonwebtoken";

import { asyncHandler } from "../utils/AsyncHandler";
import { ApiError } from "../utils/ApiError";
import { Content } from "../models/ContentModel";
import { ApiResponse } from "../utils/ApiResponse";



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