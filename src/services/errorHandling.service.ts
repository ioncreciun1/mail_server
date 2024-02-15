import {  Response } from "express";


export class ErrorHandling {

    public static handleHttpErrors(res:Response,error:any)
    {
        if(error.name === "HttpCustomException")
        {
          return res.status(error.statusCode).json({message:error.message})
        }
        return res.status(500).json({message:"Internal Server Error"})
    }
}