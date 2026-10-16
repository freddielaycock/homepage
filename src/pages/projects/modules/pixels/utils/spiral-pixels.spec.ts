import { drawQuadrilateral } from "../../../../../components/canvas/utils/draw-quadrilateral";
import { spiralPixels } from "./spiral-pixels";

jest.mock("../../../../../components/canvas/utils/draw-quadrilateral", () => ({
  drawQuadrilateral: jest.fn(),
}));
const mockedDrawQuadrilateral = jest.mocked(drawQuadrilateral);

const canvas = {} as HTMLCanvasElement;
const ctx = {} as CanvasRenderingContext2D;

describe("spiralPixels", () => {
  let random: jest.SpyInstance;

  beforeEach(() => {
    mockedDrawQuadrilateral.mockClear();
    random = jest.spyOn(Math, "random").mockReturnValue(0);
  });

  afterEach(() => {
    random.mockRestore();
  });

  it("calls drawQuadrilateral an expected number of times and calculated pixelWidth and pixelHeight", () => {
    const width = 400;
    const height = 400;
    const pixelsPerLine = 20;

    spiralPixels({ canvas, ctx, width, height, pixelsPerLine });

    expect(mockedDrawQuadrilateral).toHaveBeenCalledTimes(
      pixelsPerLine * pixelsPerLine,
    );

    const callArgs = mockedDrawQuadrilateral.mock.calls[0][0];

    expect(callArgs.width).toBe(width / pixelsPerLine);
    expect(callArgs.height).toBe(height / pixelsPerLine);
  });

  it("draws the pixels in a clockwise inward spiral", () => {
    spiralPixels({ canvas, ctx, width: 3, height: 3, pixelsPerLine: 3 });

    const coords = mockedDrawQuadrilateral.mock.calls.map(
      ([{ startX, startY }]) => [startX, startY],
    );

    expect(coords).toEqual([
      [0, 0],
      [1, 0],
      [2, 0],
      [2, 1],
      [2, 2],
      [1, 2],
      [0, 2],
      [0, 1],
      [1, 1],
    ]);
  });

  it("starts from the given startingRgb and applies the small colour change by default", () => {
    spiralPixels({
      canvas,
      ctx,
      width: 1,
      height: 1,
      pixelsPerLine: 1,
      startingRgb: [10, 20, 30],
    });

    expect(mockedDrawQuadrilateral).toHaveBeenCalledWith(
      expect.objectContaining({ style: "rgb(18,20,30)", filled: true }),
    );
  });

  it("applies the medium colour change when colourChange is medium", () => {
    spiralPixels({
      canvas,
      ctx,
      width: 1,
      height: 1,
      pixelsPerLine: 1,
      startingRgb: [10, 20, 30],
      colourChange: "medium",
    });

    expect(mockedDrawQuadrilateral).toHaveBeenCalledWith(
      expect.objectContaining({ style: "rgb(26,20,30)" }),
    );
  });

  it("applies the large colour change when colourChange is large", () => {
    spiralPixels({
      canvas,
      ctx,
      width: 1,
      height: 1,
      pixelsPerLine: 1,
      startingRgb: [10, 20, 30],
      colourChange: "large",
    });

    expect(mockedDrawQuadrilateral).toHaveBeenCalledWith(
      expect.objectContaining({ style: "rgb(42,20,30)" }),
    );
  });

  it("wraps the colour channel back around when it exceeds 255 using the default startingRgb", () => {
    spiralPixels({ canvas, ctx, width: 1, height: 1, pixelsPerLine: 1 });

    expect(mockedDrawQuadrilateral).toHaveBeenCalledWith(
      expect.objectContaining({ style: "rgb(7,0,0)" }),
    );
  });

  it("changes the channel chosen by Math.random", () => {
    random.mockReturnValue(0.5);

    spiralPixels({
      canvas,
      ctx,
      width: 1,
      height: 1,
      pixelsPerLine: 1,
      startingRgb: [10, 20, 30],
    });

    expect(mockedDrawQuadrilateral).toHaveBeenCalledWith(
      expect.objectContaining({ style: "rgb(10,28,30)" }),
    );
  });

  it("does not draw anything when pixelsPerLine is 0", () => {
    spiralPixels({ canvas, ctx, width: 100, height: 100, pixelsPerLine: 0 });

    expect(mockedDrawQuadrilateral).not.toHaveBeenCalled();
  });
});
