const express = require("express");
const router = require("./routes/index");

//Configuraçôes
const app = express();
app.use("/", router);

app.use(express.json());

module.exports = app;
