type DrawStraightLineProps = {
  ctx: CanvasRenderingContext2D;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
};

export const drawStraightLine = ({
  ctx,
  startX,
  startY,
  endX,
  endY,
}: DrawStraightLineProps): void => {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
};
