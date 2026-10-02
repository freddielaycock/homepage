export type CanvasDimensions = {
  width: number;
  height: number;
};

export type CanvasFunctionAdditionalArgs = {
  startingRgb?: [number, number, number];
};

export type CanvasFunction = (
  canvas: CanvasDimensions & {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    pixelsPerLine: number;
  } & CanvasFunctionAdditionalArgs,
) => void;

export type ExampleCanvasProps = {
  canvasFunction: CanvasFunction;
};

export type SetupCanvasOptions = {
  canvas: HTMLCanvasElement;
  canvasFunction: CanvasFunction;
  pixelsPerLine: number;
  canvasFunctionAdditionalArgs?: CanvasFunctionAdditionalArgs;
  aspectRatio?: number;
  margin?: number;
};

export type SetupCanvasProps = {
  ctx: CanvasRenderingContext2D;
  dispose: () => void;
};
