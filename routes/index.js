const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("home", {
    nome: "Daniel",
    idade: 30
  });
});

module.exports = router;
