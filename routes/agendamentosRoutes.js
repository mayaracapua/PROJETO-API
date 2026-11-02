import express from "express";

import * as agendamentosController from "../controllers/agendamentosController.js";

import autenticar from "../middlewares/autenticar.js";
import registrarLog from "../middlewares/registrarLog.js";
import validarAgendamento from "../middlewares/validarAgendamento.js";

const router = express.Router();

router.get("/", agendamentosController.listar);

router.get("/:id", agendamentosController.buscarPorId);

router.get("/horarios/:profissionalId", agendamentosController.listarHorarios);

router.post(
    "/",
    autenticar,
    validarAgendamento,
    registrarLog,
    agendamentosController.criar
);

router.put(
    "/:id",
    autenticar,
    validarAgendamento,
    registrarLog,
    agendamentosController.atualizar
);

router.delete(
    "/:id",
    autenticar,
    registrarLog,
    agendamentosController.excluir
);

export default router;