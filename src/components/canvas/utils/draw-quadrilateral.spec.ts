import { drawQuadrilateral } from "./draw-quadrilateral";

const ctx = {
  fillRect: jest.fn(),
  strokeRect: jest.fn(),
} as unknown as CanvasRenderingContext2D;

describe("drawQuadrilateral", () => {
  it("should draw a filled quadrilateral when filled is true", () => {
    drawQuadrilateral({
      ctx,
      startX: 0,
      startY: 0,
      width: 100,
      height: 100,
      filled: true,
    });

    expect(ctx.fillRect).toHaveBeenCalledWith(0, 0, 100, 100);
  });

  it("should draw an unfilled quadrilateral when filled is false", () => {
    drawQuadrilateral({
      ctx,
      startX: 0,
      startY: 0,
      width: 100,
      height: 100,
      filled: false,
      style: "red",
    });

    expect(ctx.strokeRect).toHaveBeenCalledWith(0, 0, 100, 100);
  });

  it("should draw an unfilled quadrilateral when filled is undefined", () => {
    drawQuadrilateral({
      ctx,
      startX: 0,
      startY: 0,
      width: 100,
      height: 100,
      style: "green",
    });

    expect(ctx.strokeRect).toHaveBeenCalledWith(0, 0, 100, 100);
  });
});
