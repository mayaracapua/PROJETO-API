import express from 'express';

import clientesRoutes from './routes/clientesRoutes.js';
import profissionaisRoutes from './routes/profissionaisRoutes.js';
import servicosRoutes from './routes/servicosRoutes.js';
import agendamentosRoutes from './routes/agendamentosRoutes.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API de Agendamento de Serviços');
});

app.use('/clientes', clientesRoutes);
app.use('/profissionais', profissionaisRoutes);
app.use('/servicos', servicosRoutes);
app.use('/agendamentos', agendamentosRoutes);

export default app;