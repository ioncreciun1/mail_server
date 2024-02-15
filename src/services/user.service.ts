import { Request, Response } from "express";
import { DatabaseConnection } from "../database-connection";
import { User } from "../entity/user.entity";
import { encrypt } from "../helpers/encrypt";
import { SignUpUser, UpdateUser } from "../model/user.model";
import { HttpCustomException } from "../exceptions/ValidationError";

export class UserService {

  static async signUp(signUpUser:SignUpUser):Promise<User> {
        
    console.log(signUpUser)
    const userRepository = DatabaseConnection.getRepository(User);
    const existingUser = await userRepository.findOne({
      where: { email:signUpUser.email },
    });   
    if (existingUser)
    {
        throw new HttpCustomException("User Already exists", 400)
    }

    const encryptedPassword = await encrypt.encryptPassword(signUpUser.password);
    const user = new User();
    user.name = signUpUser.name;
    user.email = signUpUser.email;
    user.password = encryptedPassword;
    user.role = signUpUser.role;

 
    await userRepository.save(user);

    return user
  }

  static async getAllUsers():Promise<Array<User>> {
      const userRepository = DatabaseConnection.getRepository(User);
      const users = await userRepository.find();

    return users
  }


  static async getUserById(id:string):Promise<User>
  {
    const userRepository = DatabaseConnection.getRepository(User);
    const existingUser = await userRepository.findOne({
      where: { id:id },
    }); 
    return existingUser
  }

  static async getUserByEmail(email:string):Promise<User>
  {
    const userRepository = DatabaseConnection.getRepository(User);
    const existingUser = await userRepository.findOne({
      where: { email:email },
    }); 
    return existingUser
  }

  static async updateUser(updateUser:UpdateUser):Promise<User> {

    const userRepository = DatabaseConnection.getRepository(User);
    const user = await userRepository.findOne({
      where: { id:updateUser.id },
    });
    user.name = updateUser.name;
    user.email = updateUser.email;
    await userRepository.save(user);

    return user
  }


  static async deleteUser(id:string):Promise<User> {
    const userRepository = DatabaseConnection.getRepository(User);
    const user = await userRepository.findOne({
      where: { id },
    });
    await userRepository.remove(user);
    return user
  }
}