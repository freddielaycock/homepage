import { drawStraightLine } from "./draw-line";

describe("drawStraightLine", () => {
  it("draws a line between the supplied coordinates", () => {
    const ctx = {
      beginPath: jest.fn(),
      moveTo: jest.fn(),
      lineTo: jest.fn(),
      stroke: jest.fn(),
    } as unknown as CanvasRenderingContext2D;

    drawStraightLine({
      ctx,
      startX: 10,
      startY: 20,
      endX: 30,
      endY: 40,
      strokeStyle: "green",
    });

    expect(ctx.beginPath).toHaveBeenCalledTimes(1);
    expect(ctx.moveTo).toHaveBeenCalledWith(10, 20);
    expect(ctx.lineTo).toHaveBeenCalledWith(30, 40);
    expect(ctx.strokeStyle).toBe("green");
    expect(ctx.stroke).toHaveBeenCalledTimes(1);
  });
});
