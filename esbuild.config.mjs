import * as esbuild from 'esbuild';
import { tanstackRouter } from '@tanstack/router-plugin/esbuild';

const serve = process.argv.includes('--serve');

const config = {
	entryPoints: ['src/index.tsx'],
	outdir: 'dist',
	entryNames: 'main',
	jsx: 'transform',
	bundle: true,
	splitting: true,
	format: 'esm',
	target: ['esnext'],
	plugins: [tanstackRouter({ target: 'react', autoCodeSplitting: true })],
};

if (serve) {
	const ctx = await esbuild.context({ ...config, sourcemap: true });
	await ctx.watch();
	const { port } = await ctx.serve({ servedir: '.', port: 3000 });
	console.log(`Dev server running at http://localhost:${port}`);
} else {
	await esbuild.build({ ...config, minify: true, sourcemap: true });
}
