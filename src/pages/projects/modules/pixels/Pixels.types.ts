import type { CanvasFunctionAdditionalArgs } from "../../../../components/canvas/Canvas.types";

export type PixelFunctionProps = {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
} & CanvasFunctionAdditionalArgs;

export type PixelCoords = {
  row: number;
  col: number;
};
