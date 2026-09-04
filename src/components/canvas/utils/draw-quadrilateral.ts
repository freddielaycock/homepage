type DrawQuadrilateralProps = {
  ctx: CanvasRenderingContext2D;
  startX: number;
  startY: number;
  width: number;
  height: number;
  filled?: boolean;
  style?: string | CanvasGradient | CanvasPattern;
};

export const drawQuadrilateral = ({
  ctx,
  startX,
  startY,
  width,
  height,
  filled = false,
  style = "black",
}: DrawQuadrilateralProps) => {
  if (filled) {
    ctx.fillStyle = style;
    ctx.fillRect(startX, startY, width, height);
  } else {
    ctx.strokeStyle = style;
    ctx.strokeRect(startX, startY, width, height);
  }
};
