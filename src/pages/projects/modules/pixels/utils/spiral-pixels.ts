import type { CanvasFunction } from "../../../../../components/canvas/Canvas.types";
import { drawQuadrilateral } from "../../../../../components/canvas/utils/draw-quadrilateral";
import type {
  PixelCoords,
  PixelFunctionProps,
} from "../../../../../pages/projects/modules/pixels/Pixels.types";

const getSpiralCoords = (size: number): PixelCoords[] => {
  const pixels: PixelCoords[] = [];
  let top = 0;
  let bottom = size - 1;
  let left = 0;
  let right = size - 1;

  while (top <= bottom && left <= right) {
    for (let col = left; col <= right; col++) pixels.push({ row: top, col });
    top++;

    for (let row = top; row <= bottom; row++) pixels.push({ row, col: right });
    right--;

    if (top <= bottom) {
      for (let col = right; col >= left; col--) {
        pixels.push({ row: bottom, col });
      }
      bottom--;
    }

    if (left <= right) {
      for (let row = bottom; row >= top; row--) {
        pixels.push({ row, col: left });
      }
      left++;
    }
  }

  return pixels;
};

export const spiralPixels: CanvasFunction = ({
  ctx,
  width,
  height,
  pixelsPerLine,
  startingRgb = [255, 0, 0],
}: PixelFunctionProps) => {
  const pixelWidth = width / pixelsPerLine;
  const pixelHeight = height / pixelsPerLine;
  const colourChange = 30;
  const colour = { r: startingRgb[0], g: startingRgb[1], b: startingRgb[2] };

  getSpiralCoords(pixelsPerLine).forEach(({ row, col }) => {
    const startX = Math.round(col * pixelWidth);
    const endX = Math.round((col + 1) * pixelWidth);
    const startY = Math.round(row * pixelHeight);
    const endY = Math.round((row + 1) * pixelHeight);
    const randomChannel = ["r", "g", "b"][
      Math.floor(Math.random() * 3)
    ] as keyof typeof colour;

    colour[randomChannel] = (colour[randomChannel] + colourChange) % 256;

    drawQuadrilateral({
      ctx,
      startX,
      startY,
      width: endX - startX,
      height: endY - startY,
      filled: true,
      style: `rgb(${colour.r},${colour.g},${colour.b})`,
    });
  });
};
