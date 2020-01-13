const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Ola Mundo");

  //GET: req.query
  //POST: req.body
  //PARAMETROS: req.params

  //SEND: ENVIAR TEXTOS
  //JSON: ENVIAR OBJETOS JSON
});

router.get("/sobre", (req, res) => {
  res.send("Pagina Sobre");
});

router.get("/posts/:id", (req, res) => {
  res.send("id do post: " + req.params.id);
});

module.exports = router;
