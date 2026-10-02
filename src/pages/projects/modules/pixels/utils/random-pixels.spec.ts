import { drawQuadrilateral } from "../../../../../components/canvas/utils/draw-quadrilateral";
import { randomPixels } from "./random-pixels";

jest.mock("../../../../../components/canvas/utils/draw-quadrilateral", () => ({
  drawQuadrilateral: jest.fn(),
}));
const mockedDrawQuadrilateral = jest.mocked(drawQuadrilateral);

describe("randomPixels", () => {
  it("calls drawQuadrilateral an expected number of times and calculated pixelWidth and pixelHeight", () => {
    const ctx = {} as CanvasRenderingContext2D;
    const width = 400;
    const height = 400;

    randomPixels({ ctx, width, height, pixelsPerLine: 20 });

    const pixelsPerLine = 20;
    const expectedCalls = pixelsPerLine * pixelsPerLine;

    expect(mockedDrawQuadrilateral).toHaveBeenCalledTimes(expectedCalls);

    const expectedPixelWidth = width / pixelsPerLine;
    const expectedPixelHeight = height / pixelsPerLine;
    const callArgs = mockedDrawQuadrilateral.mock.calls[0][0];

    expect(callArgs.width).toBe(expectedPixelWidth);
    expect(callArgs.height).toBe(expectedPixelHeight);
  });
});
