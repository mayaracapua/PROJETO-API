import * as servicoService from "../services/servicosService.js";

export function listar(req, res) {

    res.json(servicoService.listar());

}

export function buscarPorId(req, res) {

    const servico = servicoService.buscarPorId(req.params.id);

    if (!servico) {

        return res.status(404).json({
            erro: "Serviço não encontrado."
        });

    }

    res.json(servico);

}

export function criar(req, res) {

    const servico = servicoService.criar(req.body);

    res.status(201).json(servico);

}

export function atualizar(req, res) {

    const servico = servicoService.atualizar(
        req.params.id,
        req.body
    );

    if (!servico) {

        return res.status(404).json({
            erro: "Serviço não encontrado."
        });

    }

    res.json(servico);

}

export function excluir(req, res) {

    const excluiu = servicoService.excluir(req.params.id);

    if (!excluiu) {

        return res.status(404).json({
            erro: "Serviço não encontrado."
        });

    }

    res.json({
        mensagem: "Serviço removido com sucesso."
    });

}