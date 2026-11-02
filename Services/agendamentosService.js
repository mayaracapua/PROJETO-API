import { agendamentos } from "../models/dados.js";

export function listar() {

    return agendamentos;

}

export function buscarPorId(id) {

    return agendamentos.find(a => a.id == id);

}

export function listarHorarios(profissionalId) {

    return agendamentos.filter(
        a => a.profissionalId == profissionalId
    );

}

export function criar(dados) {

    const conflito = agendamentos.find(
        a =>
            a.profissionalId == dados.profissionalId &&
            a.dataHora == dados.dataHora
    );

    if (conflito) {

        return {
            erro: "Esse horário já está ocupado."
        };

    }

    const novoAgendamento = {

        id: agendamentos.length + 1,

        clienteId: dados.clienteId,

        profissionalId: dados.profissionalId,

        servicoId: dados.servicoId,

        dataHora: dados.dataHora

    };

    agendamentos.push(novoAgendamento);

    return novoAgendamento;

}

export function atualizar(id, dados) {

    const agendamento = agendamentos.find(
        a => a.id == id
    );

    if (!agendamento) {

        return null;

    }

    const conflito = agendamentos.find(
        a =>
            a.profissionalId == dados.profissionalId &&
            a.dataHora == dados.dataHora &&
            a.id != id
    );

    if (conflito) {

        return {
            erro: "Horário indisponível."
        };

    }

    agendamento.clienteId = dados.clienteId;
    agendamento.profissionalId = dados.profissionalId;
    agendamento.servicoId = dados.servicoId;
    agendamento.dataHora = dados.dataHora;

    return agendamento;

}

export function excluir(id) {

    const indice = agendamentos.findIndex(
        a => a.id == id
    );

    if (indice == -1) {

        return null;

    }

    const dataAgendamento = new Date(
        agendamentos[indice].dataHora
    );

    const agora = new Date();

    const diferencaHoras =
        (dataAgendamento - agora) / (1000 * 60 * 60);

    if (diferencaHoras < 24) {

        return {
            erro: "Cancelamento permitido apenas com 24 horas de antecedência."
        };

    }

    agendamentos.splice(indice, 1);

    return true;

}