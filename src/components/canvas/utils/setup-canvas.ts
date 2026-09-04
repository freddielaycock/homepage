import type { SetupCanvasOptions, SetupCanvasProps } from "../Canvas.types";

export const setupCanvas = ({
  canvas,
  canvasFunction,
  aspectRatio,
}: SetupCanvasOptions): SetupCanvasProps => {
  const ctx = canvas.getContext("2d");

  if (!ctx) throw new Error("Failed to get 2D context");

  const resize = (): void => {
    const dpr = window.devicePixelRatio || 1;
    const bounds = canvas.parentElement?.getBoundingClientRect();
    const width = bounds?.width ?? window.innerWidth;
    const height = aspectRatio
      ? width / aspectRatio
      : (bounds?.height ?? window.innerHeight);
    canvas.height = Math.round(height * dpr);
    canvas.width = Math.round(width * dpr);
    canvas.style.height = `${height}px`;
    canvas.style.width = `${width}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    canvasFunction({ canvas, ctx, width, height });
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
