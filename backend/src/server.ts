import express from "express";
import { router } from "./routes/routes";

const server = express();

server.use(express.json());
server.use(router);

const port = 3000;

server.listen(port, () => {
  console.log(`Backend app running in port ${port}`)
});