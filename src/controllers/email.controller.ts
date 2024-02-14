import { Request, Response } from "express";
import { DatabaseConnection } from "../database-connection";
import { User } from "../entity/user.entity";
import { encrypt } from "../helpers/helpers";

export class EmailController {

//   static async getAllEmails(req: Request, res: Response) {
//     const encryptedPassword = await encrypt.encryptPassword(password);
//     const user = new User();
//     user.name = name;
//     user.email = email;
//     user.password = encryptedPassword;
//     user.role = role;

//     const userRepository = DatabaseConnection.getRepository(User);
//     await userRepository.save(user);

//     // userRepository.create({ Name, email, password });
//     const token = encrypt.generateToken({ id: user.id });

//     return res
//       .status(200)
//       .json({ message: "User created successfully", token, user });
//   }

}