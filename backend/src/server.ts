import express from "express";
import { router } from "./routes/routes";
import cors from "cors";

const server = express();

server.use(express.json());
server.use(cors());

server.use(router);

const port = 5000;

server.listen(port, () => {
  console.log(`Backend app running in port ${port}`)
});