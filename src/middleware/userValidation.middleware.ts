import { NextFunction, Request, Response } from "express";

import { LogInUser, SignUpUser } from "../model/user.model";
import { isValidEmailAddress } from "../helpers/common";

export const validateSignUpUserBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {

    const singUpUser = req.body as SignUpUser;

    if (!singUpUser.name)
    {
        return res.status(403).json({ message: "name parameter is missing" });
    }

    if (!singUpUser.email)
    {
        return res.status(403).json({ message: "email parameter is missing" });
    }

    if(!isValidEmailAddress(singUpUser.email))
    {
        return res.status(403).json({ message: "Invalid email format" });
    }

    if (!singUpUser.password)
    {
        return res.status(403).json({ message: "password parameter is missing" });
    }

    if (!singUpUser.role)
    {
        return res.status(403).json({ message: "role parameter is missing" });
    }

    if (!["admin","user"].includes(singUpUser.role))
    {
        return res.status(403).json({ message: "role parameter can be only admin or user" });
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
          return res.status(403).json({ message: "email parameter is missing" });
      }
  
      if (!logInUser.password)
      {
          return res.status(403).json({ message: "password parameter is missing" });
      }

      next();
  };