import { Request, Response, NextFunction } from "express"
import { ApiError } from "../utils/ApiError"

import jwt, {JwtPayload} from "jsonwebtoken"






interface AuthenticatedRequest extends Request {
    id?: string | JwtPayload
}


const auth = async(req:Request, res:Response, next:NextFunction) =>{
    try {

        const token = req.headers.authorization;

        console.log(typeof token,"This is the token")

        if(!token){
            throw new ApiError(411, "Falied to get token", false)
        }


        const decode = jwt.verify(token, process.env.JWT_SECRET as string) 

        if(!decode || typeof decode !== "object" || !decode.id){
            throw new ApiError(401, "Token error", false)
        }

        (req as AuthenticatedRequest).id = decode.id;
        next();
    } catch (error) {
        throw new ApiError(401, "Token invalid", false)
    }
}

export {auth}