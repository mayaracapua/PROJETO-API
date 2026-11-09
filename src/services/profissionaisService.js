import { profissionais } from "../models/dados.js";

export function listar() {

    return profissionais;

}

export function buscarPorId(id) {

    return profissionais.find(p => p.id == id);

}

export function criar(dados) {

    const novoProfissional = {

        id: profissionais.length + 1,

        nome: dados.nome

    };

    profissionais.push(novoProfissional);

    return novoProfissional;

}

export function atualizar(id, dados) {

    const profissional = profissionais.find(p => p.id == id);

    if (!profissional) {

        return null;

    }

    profissional.nome = dados.nome;

    return profissional;

}

export function excluir(id) {

    const indice = profissionais.findIndex(p => p.id == id);

    if (indice == -1) {

        return false;

    }

    profissionais.splice(indice, 1);

    return true;

}