import { Request, Response } from "express";
import { Email } from "../entity/email.entity";
import { EmailService } from "../services/email.service";
import { EmailAdd, UpdateEmail } from "../model/email.model";
import { ErrorHandling } from "../services/errorHandling.service";


export class EmailController {

  static async getAllEmails(req: Request, res: Response) {
    try {
      const emails:Array<Email> = await EmailService.getAllEmails()
      return res
        .status(200)
        .json({ data:emails });
    } catch (error) {
        ErrorHandling.handleHttpErrors(res,error)
    }
  }


  static async getReceivedEmails(req: Request, res: Response) {
    try {
      let emails:Array<Email> = await EmailService.getReceivedEmails(req["currentUser"].id)
      return res
        .status(200)
        .json({ data:emails });
    } catch (error) {
      ErrorHandling.handleHttpErrors(res,error)
    }
  }

  static async getSentEmails(req: Request, res: Response) {
    try {
      let emails:Array<Email> = await EmailService.getSentEmails(req["currentUser"].id)
      return res
        .status(200)
        .json({ data:emails });
    } catch (error) {
      ErrorHandling.handleHttpErrors(res,error)
    }
  }

  static async getEmail(req: Request, res: Response) {
    try {
      const { id } = req.params;
      let email:Email = await EmailService.getEmail(id)
      return res
        .status(200)
        .json({ data:email });
    } catch (error) {
      ErrorHandling.handleHttpErrors(res,error)
    }
  }


  static async addEmail(req: Request, res: Response) {
    try {
      const addEmail = req.body as EmailAdd;
      let email:Email = await EmailService.addEmail(addEmail)
      return res.status(200)
      .json({ message: "Email created successfully", email});
    } catch (error) {
      ErrorHandling.handleHttpErrors(res,error)
    }

  }


  static async updateEmail(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { title, content } = req.body;
      const updatedEmail:UpdateEmail =
      {
        id: id,
        title: title,
        content: content
      } 
      let email:Email = await EmailService.updateEmail(updatedEmail)
      return res.status(200)
      .json({ message: "Updated email with the following information", email });
    } catch (error) {
      ErrorHandling.handleHttpErrors(res,error)
    }
  }


  static async deleteEmail(req: Request, res: Response) {
    try {
      const { id } = req.params;
      let email:Email = await EmailService.deleteEmail(id)
      return res.status(200).json({ message: "The following email was deleted", email });
    } catch (error) {
      ErrorHandling.handleHttpErrors(res,error)
    }
  }
}