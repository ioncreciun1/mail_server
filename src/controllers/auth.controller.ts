import { Request, Response } from "express";
import { DatabaseConnection } from "../database-connection";
import { User } from "../entity/user.entity";
import { encrypt } from "../helpers/encrypt";
import { LogInUser } from "../model/user.model";
import { UserService } from "../services/user.service";

export class AuthController {
  static async login(req: Request, res: Response) {
    try {
      const loginUser = req.body as LogInUser;

      let user:User = await UserService.getUserByEmail(loginUser.email)

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const isPasswordValid = encrypt.comparePassword(user.password, loginUser.password);
      if (!isPasswordValid) {
        return res.status(404).json({ message: "User not found" });
      }
      const token = encrypt.generateToken({ id: user.id });

      return res.status(200).json({ message: "Login successful", user, token });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  static async getProfile(req: Request, res: Response) {
    if (!req["currentUser"]) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    let user:User = await UserService.getUserById(req["currentUser"].id)
    return res.status(200).json({ ...user, password: undefined });
  }
}