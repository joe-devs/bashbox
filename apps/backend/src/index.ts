import "dotenv/config";
import Fastify from 'fastify';
import fastifyWebsocket from '@fastify/websocket';
import cors from '@fastify/cors';
import { ENV } from './config.js';
import { labRoutes } from './routes/labs.js';
import { terminalRoutes } from './routes/term-ws.js';
import { SessionService } from './services/sessions.js';

const fastify = Fastify({ logger: true });

await fastify.register(cors);
await fastify.register(fastifyWebsocket);

fastify.get('/api/health', async () => ({ ok: true }));
await fastify.register(labRoutes, { prefix: '/api/labs' });
await fastify.register(terminalRoutes);

// Session GC Interval
setInterval(() => SessionService.runGC(), 60000);

const start = async () => {
    try {
        await fastify.listen({ port: ENV.PORT, host: '0.0.0.0' });
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();