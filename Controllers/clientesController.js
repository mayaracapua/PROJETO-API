import * as clienteService from "../services/clientesService.js";

export function listar(req, res) {

    res.json(clienteService.listar());

}

export function buscarPorId(req, res) {

    const cliente = clienteService.buscarPorId(req.params.id);

    if (!cliente) {

        return res.status(404).json({
            erro: "Cliente não encontrado."
        });

    }

    res.json(cliente);

}

export function criar(req, res) {

    const cliente = clienteService.criar(req.body);

    res.status(201).json(cliente);

}

export function atualizar(req, res) {

    const cliente = clienteService.atualizar(
        req.params.id,
        req.body
    );

    if (!cliente) {

        return res.status(404).json({
            erro: "Cliente não encontrado."
        });

    }

    res.json(cliente);

}

export function excluir(req, res) {

    const excluiu = clienteService.excluir(req.params.id);

    if (!excluiu) {

        return res.status(404).json({
            erro: "Cliente não encontrado."
        });

    }

    res.json({
        mensagem: "Cliente removido com sucesso."
    });

}