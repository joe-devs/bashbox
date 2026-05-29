import { FastifyInstance } from 'fastify';
import pty from 'node-pty';
import { SessionService } from '../services/sessions.js';

export async function terminalRoutes(fastify: FastifyInstance) {
    fastify.get('/api/term/:sessionId/:nodeId', { websocket: true }, (connection, req) => {
        const { sessionId, nodeId } = req.params as any;
        const session = SessionService.get(sessionId);
        const node = session?.nodes.find(n => n.nodeId === nodeId);

        if (!session || !node) {
            connection.socket.send('Invalid session or node');
            connection.socket.close();
            return;
        }

        console.log(`[WS] Terminal connected: ${node.containerName}`);

        const term = pty.spawn('lxc', ['exec', node.containerName, '--', 'bash'], {
            name: 'xterm-color',
            cols: 80,
            rows: 24,
            cwd: process.env.HOME,
            env: process.env as any,
        });

        term.onData((data) => connection.socket.send(data));

        connection.socket.on('message', (message: Buffer) => {
            const data = message.toString();
            try {
                const json = JSON.parse(data);
                if (json.type === 'resize') {
                    term.resize(json.cols, json.rows);
                    return;
                }
            } catch (e) {
                // Raw keystrokes
                term.write(data);
            }
        });

        connection.socket.on('close', () => {
            console.log(`[WS] Terminal disconnected: ${node.containerName}`);
            term.kill();
        });
    });
}