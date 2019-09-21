const express = require("express");
const CadVoluntariosController = require("./controllers/CadVoluntariosController");

const routes = express.Router();

routes.post("/cadvoluntarios", CadVoluntariosController.store);

module.exports = routes;
