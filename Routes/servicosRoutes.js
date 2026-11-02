import express from "express";

import * as servicosController from "../controllers/servicosController.js";

const router = express.Router();

router.get("/", servicosController.listar);

router.get("/:id", servicosController.buscarPorId);

router.post("/", servicosController.criar);

router.put("/:id", servicosController.atualizar);

router.delete("/:id", servicosController.excluir);

export default router;