import { v4 as uuidv4 } from 'uuid';
import { ENV, TOPOLOGY_MAP, TopologyProfile } from '../config.js';
import { LXD } from './lxd.js';

export interface Session {
    sessionId: string;
    labId: string;
    mode: 'guided' | 'exam';
    topologyProfile: TopologyProfile;
    nodes: { nodeId: string; role: string; containerName: string }[];
    expiresAt: number;
}

const sessions = new Map<string, Session>();

export const SessionService = {
    async create(labId: string, mode: 'guided' | 'exam', profile: TopologyProfile) {
        const sessionId = uuidv4();
        const nodes = TOPOLOGY_MAP[profile].map(t => ({
            ...t,
            containerName: `bb-${sessionId.slice(0, 8)}-${t.nodeId}`
        }));

        for (const node of nodes) {
            await LXD.launch(node.containerName);
        }

        const session: Session = {
            sessionId,
            labId,
            mode,
            topologyProfile: profile,
            nodes,
            expiresAt: Date.now() + ENV.SESSION_TTL_MS
        };

        sessions.set(sessionId, session);
        return session;
    },

    get(sessionId: string) {
        return sessions.get(sessionId);
    },

    async remove(sessionId: string) {
        const session = sessions.get(sessionId);
        if (session) {
            for (const node of session.nodes) {
                await LXD.stopAndKill(node.containerName);
            }
            sessions.delete(sessionId);
        }
    },

    async runGC() {
        const now = Date.now();
        for (const [id, s] of sessions.entries()) {
            if (now > s.expiresAt) {
                console.log(`[GC] Cleaning up expired session ${id}`);
                await this.remove(id);
            }
        }
    }
};