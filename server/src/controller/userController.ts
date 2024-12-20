import { Request, Response } from "express"
import { logininValidation, signupValidation } from "../utils/zodValidation"
import { ApiError } from "../utils/ApiError"

import { ApiResponse } from "../utils/ApiResponse"
import argon2 from 'argon2'
import jwt from "jsonwebtoken"
import { asyncHandler } from "../utils/AsyncHandler"
import { User } from "../models/UserModel"

export const signup = asyncHandler(async(req:Request, res:Response)=>{
    
    const {success} = signupValidation.safeParse(req.body)
    const {username, password, fullName} = req.body

    if(!success) throw new ApiError(411, "Please send valid data", false)
    
        const hashPassword = await argon2.hash(password);

        const user = await User.create({
            fullName:fullName,
            username:username,
            password:hashPassword,
        })


        if(!user.id){
           res.status(401).json(
                 new ApiError(401, "Failed to create User", false)
            )
            return;
        }

        if(user){
             res.status(200).json(
                new ApiResponse(true, "SignedUp successfully", {})
            )
            return;
        }

}) 


export const login = asyncHandler(async (req:Request, res:Response)=>{

    const {success} = logininValidation.safeParse(req.body)
    const {username, password} = req.body;

    if(!success){
        throw new ApiError(411, "Please enter valid data", false)
    }

    const user = await User.findOne({
        username:username
    })
    
    if(!user?.id){
        throw new ApiError(411, "something went wrong", false)
    }

    const verifyPassword = await argon2.verify(user.password, password)

    if(!verifyPassword){
        throw new ApiError(401, "Please enter valid password", false)
    }

    const sanitizedUser = await User.findOne({ username }).select('-password');

    const token =  jwt.sign({id:user._id}, process.env.JWT_SECRET as string,{
        expiresIn:'2h'
    })

    return res.status(200).json(
        new ApiResponse(false, "login in successfully", {
            sanitizedUser,
            token
        } )
    )
})


