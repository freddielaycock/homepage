type DrawTextProps = {
  ctx: CanvasRenderingContext2D;
  font?: string;
  textAlign?: CanvasTextAlign;
  textBaseline?: CanvasTextBaseline;
  text: string;
  startX: number;
  startY: number;
  maxWidth?: number;
  style?: string;
};

export const drawText = ({
  ctx,
  font,
  text,
  textAlign,
  textBaseline,
  startX,
  startY,
  maxWidth,
  style = "black",
}: DrawTextProps) => {
  if (font) {
    ctx.font = font;
  }

  if (textAlign) {
    ctx.textAlign = textAlign;
  }
  if (textBaseline) {
    ctx.textBaseline = textBaseline;
  }

  ctx.fillStyle = style;
  ctx.fillText(text, startX, startY, maxWidth);
};
