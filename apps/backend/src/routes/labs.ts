import type { FastifyInstance } from 'fastify';

export async function labRoutes(fastify: FastifyInstance) {
  fastify.post('/start', async (request, reply) => {
    const body = request.body as {
      user_id?: string;
      lab_id?: string | number;
    };

    return reply.send({
      ok: true,
      message: 'Mock lab provisioned successfully',
      details: {
        sessionId: `mock-session-${Date.now()}`,
        labId: body.lab_id ?? 'unknown',
        userId: body.user_id ?? 'sysadmin_kai',
        status: 'running',
        containerName: 'mock-bashbox-lab-404',
        hostname: 'cloudnova-lab',
        username: 'joe',
        terminal: {
          websocketUrl: 'ws://localhost:4000/api/term/mock-session/node-1'
        },
        task: {
          title: 'Basic Server Inspection',
          company: 'CloudNova Hosting',
          role: 'Junior Linux Administrator',
          manager: 'Julian'
        }
      }
    });
  });
}
