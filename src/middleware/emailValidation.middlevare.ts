import { NextFunction, Request, Response } from "express";
import * as dotenv from "dotenv";
import { LogInUser, SignUpUser } from "../model/user.model";
dotenv.config();

export const validateAddEmailBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {

    const singUpUser = req.body as SignUpUser;

    if (!singUpUser.name)
    {
        return res.status(401).json({ message: "name parameter is missing" });
    }
    
    next();
};


export const validateLogInUserBody = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
  
      const logInUser = req.body as LogInUser;
  
      if (!logInUser.email)
      {
          return res.status(401).json({ message: "email parameter is missing" });
      }
  
      if (!logInUser.passsword)
      {
          return res.status(401).json({ message: "password parameter is missing" });
      }

      next();
  };