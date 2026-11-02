import { clientes } from "../models/dados.js";

export function listar() {

    return clientes;

}

export function buscarPorId(id) {

    return clientes.find(c => c.id == id);

}

export function criar(dados) {

    const novoCliente = {

        id: clientes.length + 1,

        nome: dados.nome

    };

    clientes.push(novoCliente);

    return novoCliente;

}

export function atualizar(id, dados) {

    const cliente = clientes.find(c => c.id == id);

    if (!cliente) {

        return null;

    }

    cliente.nome = dados.nome;

    return cliente;

}

export function excluir(id) {

    const indice = clientes.findIndex(c => c.id == id);

    if (indice == -1) {

        return false;

    }

    clientes.splice(indice, 1);

    return true;

}