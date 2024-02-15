
import { DatabaseConnection } from "../database-connection";
import { Email } from "../entity/email.entity";
import { UserService } from "./user.service";
import { EmailAdd, UpdateEmail } from "../model/email.model";
import { HttpCustomException } from "../exceptions/ValidationError";

export class EmailService {

  static async getAllEmails():Promise<Array<Email>> {
    const emailRepository = DatabaseConnection.getRepository(Email);
    const emails:Array<Email> = await emailRepository.find();

    return emails
  }


  static async getReceivedEmails(userId:string):Promise<Array<Email>> {
    const user = await UserService.getUserById(userId)
    const emailRepository = DatabaseConnection.getRepository(Email);
    const emails:Array<Email> = await emailRepository.find({where:{receiver:user.email}});

    return emails
  }

  static async getSentEmails(userId:string):Promise<Array<Email>> {
    const user = await UserService.getUserById(userId)

    const emailRepository = DatabaseConnection.getRepository(Email);
    const emails:Array<Email> = await emailRepository.find({where:{sender:user.email}});

    return emails
  }

  static async getEmail(emailId:string):Promise<Email> {
    const emailRepository = DatabaseConnection.getRepository(Email);
    const email = await emailRepository.findOne({
      where: { id:emailId },
    });
    if (!email)
    {
      throw new HttpCustomException("Email Not Found", 404)
    }
    return email;
}


  static async addEmail(sentEmail:EmailAdd):Promise<Email> {
    const emailRepository = DatabaseConnection.getRepository(Email);
    const email = new Email();
    email.title = sentEmail.title;
    email.content = sentEmail.content;
    email.sender = sentEmail.sender;
    email.receiver = sentEmail.receiver;
    await emailRepository.save(email)
    return email
  }


  static async updateEmail(updateEmail:UpdateEmail):Promise<Email> {
  
    const emailRepository = DatabaseConnection.getRepository(Email);
    const email = await emailRepository.findOne({
      where: { id:updateEmail.id },
    });
    email.title = updateEmail.title;
    email.content = updateEmail.content;
    await emailRepository.save(email);
    return email
  }


  static async deleteEmail(emailId:string):Promise<Email> {
    const emailRepository = DatabaseConnection.getRepository(Email);
    const email = await emailRepository.findOne({
      where: { id:emailId },
    });
    if (!email)
    {
      throw new HttpCustomException("Email Not found",404);
    }
    await emailRepository.remove(email);
    return email;
  }
}