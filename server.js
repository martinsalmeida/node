const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "variables.env" });

//Conexão com o Banco de dados
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection.on("error", error => {
  console.error("ERRO: " + error.message);
});

app.set("port", process.env.PORT || 7000);
const server = app.listen(app.get("port"), () => {
  console.log("servidor rodando na porta" + server.address().port);
});
