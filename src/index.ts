import { DatabaseConnection } from "./database-connection";
import * as express from "express";
import * as dotenv from "dotenv";
import { Request, Response } from "express";
import { errorHandler } from "./middleware/error.middleware";
import { userRouter } from "./routes/user.routes";
import { emailRouter } from "./routes/email.routes";

dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use(errorHandler);
app.use("/auth", userRouter);
app.use("/api", emailRouter);

console.log(PORT)
app.get("*", (req: Request, res: Response) => {
  res.status(505).json({ message: "Bad Request" });
});

DatabaseConnection.initialize()
  .then(async () => {
    app.listen(PORT, () => {
      console.log("Server is running on http://localhost:" + PORT);
    });
    console.log("Data Connection has been initialized!");
  })
  .catch((error) => console.log(error));