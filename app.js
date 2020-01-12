const express = require("express");

//Routas
const router = express.Router();
router.get("/", (req, res) => {
  res.send("Ola Mundo");
});

//Configuraçôes
const app = express();
app.use("/", router);

module.exports = app;
