import express from "express";

import * as clientesController from "../controllers/clientesController.js";

const router = express.Router();

router.get("/", clientesController.listar);

router.get("/:id", clientesController.buscarPorId);

router.post("/", clientesController.criar);

router.put("/:id", clientesController.atualizar);

router.delete("/:id", clientesController.excluir);

export default router;