import express from "express";
import { Server } from "http";
import { AppDataSource, getDBConnection } from "./database/database";
import { eventRoute } from "./routes/event.route";

export const start = async (port = 4040): Promise<Server> =>
  new Promise(async (resolve, reject) => {
    try {
      const app = express();
      getDBConnection();
      app.get("/", (req, res) => {
        res.send("Hello World!");
      });
      await AppDataSource.initialize();
      // plugin routes
      app.use("/api/v1", eventRoute);

      const server = app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
        resolve(server);
      });
    } catch (err) {
      reject(err);
    }
  });
