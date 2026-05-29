import { z } from 'zod';

const envSchema = z.object({
    PORT: z.coerce.number().default(4000),
    SESSION_TTL_MS: z.coerce.number().default(3600000), // 1 hour
    LXD_IMAGE: z.string().default('images:rockylinux/9/amd64'),
    CONTAINER_CPU_LIMIT: z.string().default('1'),
    CONTAINER_MEM_LIMIT: z.string().default('512MiB'),
});

export const ENV = envSchema.parse(process.env);

export type TopologyProfile = 'S' | 'SC' | 'S2C';

export const LAB_CONFIGS: Record<string, { profile: TopologyProfile }> = {
    'linux-basics-1': { profile: 'S' },
    'networking-101': { profile: 'SC' },
    'load-balancer-adv': { profile: 'S2C' },
};

export const TOPOLOGY_MAP: Record<TopologyProfile, { nodeId: string; role: string }[]> = {
    S: [{ nodeId: 'n1', role: 'single' }],
    SC: [
        { nodeId: 'n1', role: 'server' },
        { nodeId: 'n2', role: 'client' },
    ],
    S2C: [
        { nodeId: 'n1', role: 'server1' },
        { nodeId: 'n2', role: 'server2' },
        { nodeId: 'n3', role: 'client' },
    ],
};