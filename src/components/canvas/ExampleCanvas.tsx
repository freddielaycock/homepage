import { useEffect, useRef } from "react";

import type { ExampleCanvasProps } from "./Canvas.types";
import { setupCanvas } from "./utils/setup-canvas";

export const ExampleCanvas = ({ canvasFunction }: ExampleCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const element = canvasRef.current;

    if (!element) return;

    const canvas = setupCanvas({
      canvas: element,
      canvasFunction,
    });

    return canvas.dispose;
  }, [canvasFunction]);

  return <canvas ref={canvasRef} aria-label="Example canvas" />;
};
