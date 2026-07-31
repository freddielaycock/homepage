const esbuild = require("esbuild");
const fs = require("fs");

const outdir = "build";
const serve = process.argv.includes("--serve");

fs.rmSync(outdir, { recursive: true, force: true });
fs.mkdirSync(outdir);
fs.copyFileSync("src/favicon.ico", `${outdir}/favicon.ico`);
fs.copyFileSync("src/index.html", `${outdir}/index.html`);

const config = {
	entryPoints: ["src/index.tsx"],
	bundle: true,
	outfile: `${outdir}/bundle.js`,
	platform: "browser",
};

if (serve) {
	esbuild.context({ ...config, sourcemap: "inline" }).then((ctx) => {
		ctx.watch();
		ctx
			.serve({ servedir: outdir, port: 3000 })
			.then(({ port }) =>
				console.log(`Dev server running at http://localhost:${port}`),
			);
	});
} else {
	esbuild.build({ ...config, minify: true, target: ["es2020"] });
}
