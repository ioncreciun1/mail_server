import * as express from "express";
import { authentification } from "../middleware/authentifcation.middleware";
import { UserController } from "../controllers/user.controller";
import { authorization } from "../middleware/authorization.middleware";
import { AuthController } from "../controllers/auth.controller";
import { validateLogInUserBody, validateSignUpUserBody } from "../middleware/userValidation.middleware";
const Router = express.Router();

Router.get(
  "/users",
  authentification,
  authorization(["admin"]),
  UserController.getUsers
);

Router.get(
  "/profile",
  authentification,
  authorization(["user", "admin"]),
  AuthController.getProfile
);

Router.post("/signup", validateSignUpUserBody, UserController.signup);
Router.post("/login", validateLogInUserBody, AuthController.login);

Router.put(
  "/update/:id",
  authentification,
  authorization(["user", "admin"]),
  UserController.updateUser
);

Router.delete(
  "/delete/:id",
  authentification,
  authorization(["admin"]),
  UserController.deleteUser
);
export { Router as userRouter };