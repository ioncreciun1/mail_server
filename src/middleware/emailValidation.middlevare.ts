import { NextFunction, Request, Response } from "express";
import { EmailAdd } from "../model/email.model";
import { isValidEmailAddress } from "../helpers/common";

export const validateAddEmailBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {

    const email = req.body as EmailAdd;

    if (!email.title)
    {
        return res.status(403).json({ message: "title parameter is missing" });
    }

    if (!email.content)
    {
        return res.status(403).json({ message: "content parameter is missing" });
    }

    if (!email.sender)
    {
        return res.status(403).json({ message: "sender email parameter is missing" });
    }

    if(!isValidEmailAddress(email.sender))
    {
        return res.status(403).json({ message: "Invalid sender email format" });
    }

    if (!email.receiver)
    {
        return res.status(403).json({ message: "receiver email parameter is missing" });
    }

    if(!isValidEmailAddress(email.receiver))
    {
        return res.status(403).json({ message: "Invalid receiver email format" });
    }

  
    
    next();
};