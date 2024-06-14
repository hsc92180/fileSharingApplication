const express = require("express");

const routes = express.Router();

const controllers=require("../controller/files")

routes.post("/api/files/",controllers.uploadfile);

routes.get("/files/:uuid",controllers.generatefile);

routes.get("/files/download/:uuid",controllers.downloadfile);

routes.post("/api/files/send", controllers.sendfile);

module.exports = routes;