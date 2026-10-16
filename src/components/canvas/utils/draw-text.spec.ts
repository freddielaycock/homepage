import { drawText } from "./draw-text";

const ctx = {
  fillText: jest.fn(),
} as unknown as CanvasRenderingContext2D;

describe("drawText", () => {
  it("should call fillText with the correct arguments", () => {
    drawText({
      ctx,
      font: "16px Arial",
      textAlign: "center",
      textBaseline: "middle",
      text: "Hello, world!",
      startX: 10,
      startY: 20,
      maxWidth: 100,
    });

    expect(ctx.fillText).toHaveBeenCalledWith("Hello, world!", 10, 20, 100);
  });

  it("should use the default style if none is provided", () => {
    drawText({
      ctx,
      text: "Hello, world!",
      startX: 10,
      startY: 20,
    });

    expect(ctx.fillText).toHaveBeenCalledWith(
      "Hello, world!",
      10,
      20,
      undefined,
    );
  });
});
