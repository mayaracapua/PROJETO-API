import * as agendamentoService from "../services/agendamentosService.js";

export function listar(req, res) {

    res.json(agendamentoService.listar());

}

export function buscarPorId(req, res) {

    const agendamento = agendamentoService.buscarPorId(req.params.id);

    if (!agendamento) {

        return res.status(404).json({
            erro: "Agendamento não encontrado."
        });

    }

    res.json(agendamento);

}

export function listarHorarios(req, res) {

    res.json(
        agendamentoService.listarHorarios(req.params.profissionalId)
    );

}

export function criar(req, res) {

    const resultado = agendamentoService.criar(req.body);

    if (resultado.erro) {

        return res.status(400).json(resultado);

    }

    res.status(201).json(resultado);

}

export function atualizar(req, res) {

    const resultado = agendamentoService.atualizar(
        req.params.id,
        req.body
    );

    if (!resultado) {

        return res.status(404).json({
            erro: "Agendamento não encontrado."
        });

    }

    if (resultado.erro) {

        return res.status(400).json(resultado);

    }

    res.json(resultado);

}

export function excluir(req, res) {

    const resultado = agendamentoService.excluir(req.params.id);

    if (resultado == null) {

        return res.status(404).json({
            erro: "Agendamento não encontrado."
        });

    }

    if (resultado.erro) {

        return res.status(400).json(resultado);

    }

    res.json({
        mensagem: "Agendamento cancelado com sucesso."
    });

}