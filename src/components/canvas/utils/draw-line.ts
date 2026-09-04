type DrawStraightLineProps = {
  ctx: CanvasRenderingContext2D;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  strokeStyle: string | CanvasGradient | CanvasPattern;
};

export const drawStraightLine = ({
  ctx,
  startX,
  startY,
  endX,
  endY,
  strokeStyle,
}: DrawStraightLineProps): void => {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.strokeStyle = strokeStyle;
  ctx.stroke();
};
