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
  } & CanvasFunctionAdditionalArgs,
) => void;

export type ExampleCanvasProps = {
  canvasFunction: CanvasFunction;
};

export type SetupCanvasOptions = {
  canvas: HTMLCanvasElement;
  canvasFunction: CanvasFunction;
  canvasFunctionAdditionalArgs?: CanvasFunctionAdditionalArgs;
  aspectRatio?: number;
  margin?: number;
};

export type SetupCanvasProps = {
  ctx: CanvasRenderingContext2D;
  dispose: () => void;
};
