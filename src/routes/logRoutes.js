import express from "express";
import LogController from "../controllers/logController.js";

const router = express.Router();

router
  .get("/logs", LogController.listarLogs)
  .get("/logs/:id", LogController.listarLogPorId)
  .post("/logs", LogController.cadastrarLog)
  .put("/logs/:id", LogController.atualizarLog)
  .delete("/logs/:id", LogController.deletarLog);

export default router;
