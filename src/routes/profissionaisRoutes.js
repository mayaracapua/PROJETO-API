import express from "express";

import * as profissionaisController from "../controllers/profissionaisController.js";

const router = express.Router();

router.get("/", profissionaisController.listar);

router.get("/:id", profissionaisController.buscarPorId);

router.post("/", profissionaisController.criar);

router.put("/:id", profissionaisController.atualizar);

router.delete("/:id", profissionaisController.excluir);

export default router;