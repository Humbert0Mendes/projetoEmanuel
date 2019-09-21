const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes");

const server = express();

mongoose.connect(
  "mongodb+srv://admemanuel:admemanuel@cluster0-7lnt7.mongodb.net/projetoemanuel?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

server.use(express.json());
server.use(routes);

server.listen(3333);
