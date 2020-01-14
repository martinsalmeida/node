const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  let obj = {
    nome: "Daniel",
    idade: 30,
    mostrar: false,
    ingredientes: [
      { nome: "arroz", qt: 20 },
      { nome: "feijao", qt: 30 }
    ],
    interesses: ["node", "js", "react"],
    teste: []
  };
  res.render("home", obj);
});

module.exports = router;
