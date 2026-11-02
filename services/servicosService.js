import { servicos } from "../models/dados.js";

export function listar() {

    return servicos;

}

export function buscarPorId(id) {

    return servicos.find(s => s.id == id);

}

export function criar(dados) {

    const novoServico = {

        id: servicos.length + 1,

        nome: dados.nome,

        valor: dados.valor

    };

    servicos.push(novoServico);

    return novoServico;

}

export function atualizar(id, dados) {

    const servico = servicos.find(s => s.id == id);

    if (!servico) {

        return null;

    }

    servico.nome = dados.nome;
    servico.valor = dados.valor;

    return servico;

}

export function excluir(id) {

    const indice = servicos.findIndex(s => s.id == id);

    if (indice == -1) {

        return false;

    }

    servicos.splice(indice, 1);

    return true;

}