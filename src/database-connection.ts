import { DataSource } from "typeorm"
import * as dotenv from "dotenv";
import { Email } from "./entity/email.entity";
import { User } from "./entity/user.entity";

dotenv.config();


dotenv.config();

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE } =
  process.env;

export const DatabaseConnection = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: parseInt(DB_PORT ||  "5432"),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,

    synchronize:  false,
    logging:  false,
    entities: [User, Email],
    migrations: [__dirname + "/migrations/*.ts"],
    subscribers: [],
})
