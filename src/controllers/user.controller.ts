import { Request, Response } from "express";
import { User } from "../entity/user.entity";
import { encrypt } from "../helpers/encrypt";
import { SignUpUser, UpdateUser } from "../model/user.model";
import { UserService } from "../services/user.service";
import { ErrorHandling } from "../services/errorHandling.service";

export class UserController {

  static async signup(req: Request, res: Response) {
      try {
        const signUpUser = req.body as SignUpUser;
        let signedUser = await UserService.signUp(signUpUser)
        const token = encrypt.generateToken({ id: signedUser.id });
        return res
          .status(200)
          .json({ message: "User created successfully", token, signedUser });
      } catch (error) {
        ErrorHandling.handleHttpErrors(res,error)
      }
  }

  static async getUsers(req: Request, res: Response) {
      try {
        let users:Array<User> = await UserService.getAllUsers();
        return res.status(200).json({
          data: users,
        });
      } catch (error) {
        ErrorHandling.handleHttpErrors(res,error)
      }
  }

  static async updateUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, email } = req.body;

      const updateUser:UpdateUser = {
        id: id,
        name: name,
        email: email
      }
      let user:User = await UserService.updateUser(updateUser)
      return res.status(200).json({ message: "User updated", user });
    } catch (error) {
      ErrorHandling.handleHttpErrors(res,error)
    }
  }


  static async deleteUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      let user:User = await UserService.deleteUser(id)
      return res.status(200).json({ message: "User Deleted", user });
    } catch (error) {
      ErrorHandling.handleHttpErrors(res,error)
    }
  }
}