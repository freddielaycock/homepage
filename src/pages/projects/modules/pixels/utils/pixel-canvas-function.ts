import type { CanvasFunction } from "../../../../../components/canvas/Canvas.types";
import { drawQuadrilateral } from "../../../../../components/canvas/utils/draw-quadrilateral";

export const pixelCanvasFunction = ({
  ctx,
  width,
  height,
}: Parameters<CanvasFunction>[0]) => {
  const pixelsPerLine = 20;
  const pixelWidth = width / pixelsPerLine;
  const pixelHeight = height / pixelsPerLine;

  for (let i = 0; i < pixelsPerLine; i++) {
    for (let j = 0; j < pixelsPerLine; j++) {
      const startX = j * pixelWidth;
      const startY = i * pixelHeight;
      const colour = `rgb(
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)}
      )`;

      drawQuadrilateral({
        ctx,
        startX: startX,
        startY: startY,
        width: pixelWidth,
        height: pixelHeight,
        filled: true,
        style: colour,
      });
    }
  }
};
