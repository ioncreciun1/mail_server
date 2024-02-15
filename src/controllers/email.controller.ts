import { Request, Response } from "express";
import { DatabaseConnection } from "../database-connection";
import { Email } from "../entity/email.entity";

export class EmailController {

  static async getAllEmails(req: Request, res: Response) {
    const emailRepository = DatabaseConnection.getRepository(Email);
    const emails:Array<Email> = await emailRepository.find();
    return res
      .status(200)
      .json({ data:emails });
  }


  static async getReceivedEmails(req: Request, res: Response) {
    const emailRepository = DatabaseConnection.getRepository(Email);
    const emails:Array<Email> = await emailRepository.find();
    return res
      .status(200)
      .json({ data:emails });
  }

  static async getSentEmails(req: Request, res: Response) {
    const emailRepository = DatabaseConnection.getRepository(Email);
    const emails:Array<Email> = await emailRepository.find();
    return res
      .status(200)
      .json({ data:emails });
  }

  static async getEmail(req: Request, res: Response) {
    const { id } = req.params;
    const emailRepository = DatabaseConnection.getRepository(Email);
    const email = await emailRepository.findOne({
      where: { id },
    });
    res.status(200).json({ email });
  }


  static async addEmail(req: Request, res: Response) {
    const {title,content,sender,receiver} = req.body;
    const emailRepository = DatabaseConnection.getRepository(Email);
    const email = new Email();
    email.title = title;
    email.content = content;
    email.sender = sender;
    email.receiver = receiver;
    await emailRepository.save(email)
    return res
      .status(200)
      .json({ message: "Email created successfully", email});
  }


  static async updateEmail(req: Request, res: Response) {
    const { id } = req.params;
    const { title, content } = req.body;
    const emailRepository = DatabaseConnection.getRepository(Email);
    const email = await emailRepository.findOne({
      where: { id },
    });
    email.title = title;
    email.content = content;
    await emailRepository.save(email);
    res.status(200).json({ message: "Updated email with the following information", email });
  }


  static async deleteEmail(req: Request, res: Response) {
    const { id } = req.params;
    const emailRepository = DatabaseConnection.getRepository(Email);
    const email = await emailRepository.findOne({
      where: { id },
    });
    await emailRepository.remove(email);
    res.status(200).json({ message: "The following email was deleted", email });
  }
}