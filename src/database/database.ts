import { join } from "path";
import { Database } from "sqlite3";
import { DataSource } from "typeorm";
import sqlite3 from "sqlite3";

let db: Database;

const dbLocation = join(__dirname, "../../data/myDb.db");

export const getDBConnection = (): Database => {
  if (!db) {
    const sqlite3 = require("sqlite3").verbose();
    db = new sqlite3.Database(dbLocation);
  }
  return db;
};
console.log(dbLocation);

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: dbLocation,
  driver: sqlite3,
  synchronize: true,
  logging: true,
  // dropSchema: true,
  entities: [__dirname + "/entities/*{.ts,.js}"],
  migrations: [__dirname + "/migrations/*{.ts,.js}"],
});
