import * as express from "express";
import { authentification } from "../middleware/authentifcation.middleware";
import { UserController } from "../controllers/user.controller";
import { authorization } from "../middleware/authorization.middleware";
import { AuthController } from "../controllers/auth.controller";
const Router = express.Router();

// Router.get(
//   "/emails",
//   authentification,
//   authorization(["admin"]),
//   UserController.getUsers
// );

// Router.get(
//   "/emails/sent",
//   authentification,
//   authorization(["user", "admin"]),
//   AuthController.getProfile
// );

// Router.get(
//     "/emails/received",
//     authentification,
//     authorization(["user", "admin"]),
//     AuthController.getProfile
//   );

// Router.get(
//     "/email/:id",
//     authentification,
//     authorization(["user", "admin"]),
//     AuthController.getProfile
//   );

// Router.post(
//   "/email",
//   authentification,
//   authorization(["user", "admin"]),
//   UserController.updateUser
// );


// Router.put(
//     "/email",
//     authentification,
//     authorization(["user", "admin"]),
//     UserController.updateUser
//   );
  

// Router.delete(
//   "/delete/:id",
//   authentification,
//   authorization(["admin"]),
//   UserController.deleteUser
// );
export { Router as emailRouter };