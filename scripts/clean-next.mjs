import { existsSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

const targets = process.argv.slice(2);
const dirs = targets.length > 0 ? targets : ['.next'];

for (const dir of dirs) {
  const targetDir = resolve(dir);

  if (!existsSync(targetDir)) {
    continue;
  }

  try {
    rmSync(targetDir, { force: true, recursive: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`Failed to remove ${targetDir}. Stop any running Next.js process and try again.`);
    console.error(message);
    process.exit(1);
  }
}
