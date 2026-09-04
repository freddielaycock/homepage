export type CanvasDimensions = {
  width: number;
  height: number;
};

export type CanvasFunction = (
  canvas: CanvasDimensions & {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
  },
) => void;

export type ExampleCanvasProps = {
  canvasFunction: CanvasFunction;
};

export type SetupCanvasOptions = {
  canvas: HTMLCanvasElement;
  canvasFunction: CanvasFunction;
};

export type SetupCanvasProps = {
  ctx: CanvasRenderingContext2D;
  dispose: () => void;
};
