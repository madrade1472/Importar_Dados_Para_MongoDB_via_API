import express from "express";
import logs from "./logRoutes.js";


const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ titulo: "Cadastro de Log" });
  });

  //usando as outras rotas. Neste caso existe apenas rota 'livros' por enquanto
  app.use(express.json(), logs);
};

export default routes;
