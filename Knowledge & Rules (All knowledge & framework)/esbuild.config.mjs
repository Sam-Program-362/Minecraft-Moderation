import esbuild from 'esbuild';

esbuild.build({
  entryPoints: ['src/index.ts'],
  outfile: 'packs/BP/scripts/index.js',
  bundle: true,
  format: 'esm',
  target: 'es2022',
  external: ['@minecraft/server', '@minecraft/server-ui']
}).catch(() => process.exit(1));
