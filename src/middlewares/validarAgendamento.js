export default function validarAgendamento(req, res, next) {

    const {
        clienteId,
        profissionalId,
        servicoId,
        dataHora
    } = req.body;

    if (
        !clienteId ||
        !profissionalId ||
        !servicoId ||
        !dataHora
    ) {

        return res.status(400).json({
            erro: "Todos os campos são obrigatórios."
        });

    }

    next();

}