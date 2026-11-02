import * as profissionalService from "../services/profissionaisService.js";

export function listar(req, res) {

    res.json(profissionalService.listar());

}

export function buscarPorId(req, res) {

    const profissional = profissionalService.buscarPorId(req.params.id);

    if (!profissional) {

        return res.status(404).json({
            erro: "Profissional não encontrado."
        });

    }

    res.json(profissional);

}

export function criar(req, res) {

    const profissional = profissionalService.criar(req.body);

    res.status(201).json(profissional);

}

export function atualizar(req, res) {

    const profissional = profissionalService.atualizar(
        req.params.id,
        req.body
    );

    if (!profissional) {

        return res.status(404).json({
            erro: "Profissional não encontrado."
        });

    }

    res.json(profissional);

}

export function excluir(req, res) {

    const excluiu = profissionalService.excluir(req.params.id);

    if (!excluiu) {

        return res.status(404).json({
            erro: "Profissional não encontrado."
        });

    }

    res.json({
        mensagem: "Profissional removido com sucesso."
    });

}