import { DataSource } from "typeorm"

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE, NODE_ENV } =
  process.env;

export const DatabaseConnection = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: parseInt(DB_PORT ||  "5432"),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,

    synchronize: NODE_ENV === "dev" ? false : false,
    logging: NODE_ENV === "dev" ? false : false,
    migrations: [__dirname + "/migration/*.ts"],
    subscribers: [],
})
