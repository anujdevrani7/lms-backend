import { NextFunction,Request,Response } from 'express';
import { ControllerType } from '../types';

export const asyncHandler=(requestHandler:ControllerType)=>{
    return(req:Request,res:Response,next:NextFunction)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>{
            // logger wali file me error log save karwa diyo
            console.log("value of the error is  : ",err)
            next(err)
        })
    }
}