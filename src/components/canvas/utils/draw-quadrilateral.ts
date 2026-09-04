type DrawQuadrilateralProps = {
  ctx: CanvasRenderingContext2D;
  startX: number;
  startY: number;
  width: number;
  height: number;
  filled?: boolean;
};

export const drawQuadrilateral = ({
  ctx,
  startX,
  startY,
  width,
  height,
  filled = false,
}: DrawQuadrilateralProps) => {
  if (filled) {
    ctx.fillRect(startX, startY, width, height);
  } else {
    ctx.strokeRect(startX, startY, width, height);
  }
};
