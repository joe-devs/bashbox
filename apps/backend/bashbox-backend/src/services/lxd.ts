import { execa } from 'execa';
import { ENV } from '../config.js';

export const LXD = {
    async launch(name: string) {
        console.log(`[LXD] Launching ${name}...`);
        await execa('lxc', ['launch', ENV.LXD_IMAGE, name]);
        await execa('lxc', ['config', 'set', name, 'limits.cpu', ENV.CONTAINER_CPU_LIMIT]);
        await execa('lxc', ['config', 'set', name, 'limits.memory', ENV.CONTAINER_MEM_LIMIT]);
    },

    async stopAndKill(name: string) {
        try {
            console.log(`[LXD] Destroying ${name}...`);
            await execa('lxc', ['delete', '--force', name]);
        } catch (e) {
            console.error(`[LXD] Error deleting ${name}:`, e);
        }
    },

    async execCheck(name: string, labId: string) {
        try {
            // Logic for /labs/<id>/check.sh
            const { stdout } = await execa('lxc', ['exec', name, '--', 'bash', '-lc', `[ -f /labs/${labId}/check.sh ] && /labs/${labId}/check.sh || echo '{"status":"not_found"}'`]);
            return JSON.parse(stdout);
        } catch {
            return { score: 0, error: 'Check script failed or returned invalid JSON' };
        }
    }
};