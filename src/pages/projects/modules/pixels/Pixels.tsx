import { type FC, useEffect, useRef } from "react";
import { setupCanvas } from "../../../../components/canvas/utils/setup-canvas";
import { pixelCanvasFunction } from "./utils/pixel-canvas-function";

export const Pixels: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const element = canvasRef.current;

    if (!element) return;

    const canvas = setupCanvas({
      canvas: element,
      canvasFunction: pixelCanvasFunction,
      aspectRatio: 2,
    });

    return canvas.dispose;
  }, []);

  return <canvas ref={canvasRef} aria-label="Pixels Canvas" />;
};
