import { Request, Response } from "express";
import { DatabaseConnection } from "../database-connection";
import { User } from "../entity/user.entity";
import { encrypt } from "../helpers/encrypt";
import { SignUpUser } from "../model/user.model";

export class UserController {

  static async signup(req: Request, res: Response) {
    
    const signUpUser = req.body as SignUpUser;

    console.log(signUpUser)
    console.log(signUpUser)
    const encryptedPassword = await encrypt.encryptPassword(signUpUser.password);
    const user = new User();
    user.name = signUpUser.name;
    user.email = signUpUser.email;
    user.password = encryptedPassword;
    user.role = signUpUser.role;

    const userRepository = DatabaseConnection.getRepository(User);
    await userRepository.save(user);

    const token = encrypt.generateToken({ id: user.id });

    return res
      .status(200)
      .json({ message: "User created successfully", token, user });
  }

  static async getUsers(req: Request, res: Response) {
      const userRepository = DatabaseConnection.getRepository(User);
      const users = await userRepository.find();

      return res.status(200).json({
        data: users,
      });
  }

  static async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email } = req.body;
    const userRepository = DatabaseConnection.getRepository(User);
    const user = await userRepository.findOne({
      where: { id },
    });
    user.name = name;
    user.email = email;
    await userRepository.save(user);
    res.status(200).json({ message: "udpdate", user });
  }


  static async deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    const userRepository = DatabaseConnection.getRepository(User);
    const user = await userRepository.findOne({
      where: { id },
    });
    await userRepository.remove(user);
    res.status(200).json({ message: "User Deleted", user });
  }
}