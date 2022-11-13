import express from "express";
import { router } from "./routes/routes";

const server = express();
const cors = require("cors");
var corsParam = {origin: "http://localhost:3001", optionsSuccessStatus: 200}

server.use(express.json());
server.use(router);
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  server.use(cors())
  //res.setHeader('Access-Control-Allow-Credentials', true)
  next()
});

const port = 3000;

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});