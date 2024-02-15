import * as express from "express";
import { authentification } from "../middleware/authentifcation.middleware";
import { authorization } from "../middleware/authorization.middleware";
import { EmailController } from "../controllers/email.controller";
import { validateAddEmailBody } from "../middleware/emailValidation.middlevare";
const Router = express.Router();

Router.get(
  "/emails",
  authentification,
  authorization(["admin"]),
  EmailController.getAllEmails
);

Router.get(
  "/emails/sent",
  authentification,
  authorization(["user", "admin"]),
  EmailController.getSentEmails
);

Router.get(
    "/emails/received",
    authentification,
    authorization(["user", "admin"]),
    EmailController.getReceivedEmails
    );

Router.get(
    "/email/:id",
    authentification,
    authorization(["user", "admin"]),
    EmailController.getEmail
    );

Router.post(
  "/email",
  authentification,
  authorization(["user", "admin"]),
  validateAddEmailBody,
  EmailController.addEmail
);


Router.put(
    "/email/:id",
    authentification,
    authorization(["user", "admin"]),
    EmailController.updateEmail
  );
  

Router.delete(
  "/email/:id",
  authentification,
  authorization(["user","admin"]),
  EmailController.deleteEmail
);

export { Router as emailRouter };