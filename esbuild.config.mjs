import { cpSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { tanstackRouter } from "@tanstack/router-plugin/esbuild";
import * as esbuild from "esbuild";

const serve = process.argv.includes("--serve");

const copyPublicAssets = () => {
  const publicDir = resolve("public");

  if (!existsSync(publicDir)) {
    return;
  }

  cpSync(publicDir, resolve("dist/public"), { recursive: true });
};

const config = {
  entryPoints: ["src/main.tsx"],
  outdir: "dist",
  entryNames: "main",
  jsx: "transform",
  bundle: true,
  splitting: true,
  format: "esm",
  target: ["esnext"],
  loader: {
    ".gen": "ts",
    ".jpg": "file",
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify(
      serve ? "development" : "production",
    ),
  },
  plugins: [tanstackRouter({ target: "react", autoCodeSplitting: true })],
};

if (serve) {
  const ctx = await esbuild.context({ ...config, sourcemap: true });
  await ctx.watch();
  const { port } = await ctx.serve({
    servedir: ".",
    port: 3000,
    fallback: "index.html",
  });
  console.log(`Dev server running at http://localhost:${port}`);
} else {
  await esbuild.build({ ...config, minify: true, sourcemap: true });
  copyPublicAssets();
}
