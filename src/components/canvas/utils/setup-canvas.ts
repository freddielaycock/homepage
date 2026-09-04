import type { SetupCanvasOptions, SetupCanvasProps } from "../Canvas.types";

export const setupCanvas = ({
  canvas,
  canvasFunction,
}: SetupCanvasOptions): SetupCanvasProps => {
  const ctx = canvas.getContext("2d");

  if (!ctx) throw new Error("Failed to get 2D context");

  const resize = (): void => {
    const dpr = window.devicePixelRatio || 1;
    const height = window.innerHeight;
    const width = window.innerWidth;
    canvas.height = Math.round(height * dpr);
    canvas.width = Math.round(width * dpr);
    canvas.style.height = `${height}px`;
    canvas.style.width = `${width}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    canvasFunction({ ctx, width, height });
  };

  resize();
  window.addEventListener("resize", resize);

  return {
    ctx,
    dispose: () => {
      window.removeEventListener("resize", resize);
    },
  };
};
