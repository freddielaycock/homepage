import { setupCanvas } from "./setup-canvas";

const setWindowSize = (width: number, height: number): void => {
  Object.defineProperties(window, {
    innerHeight: { configurable: true, value: height },
    innerWidth: { configurable: true, value: width },
  });
};

describe("SetupCanvas", () => {
  const ctx = {
    setTransform: jest.fn(),
  } as unknown as CanvasRenderingContext2D;
  const canvasFunction = jest.fn();
  let canvas: HTMLCanvasElement;
  let getContext: jest.SpyInstance;

  beforeEach(() => {
    jest.clearAllMocks();

    setWindowSize(800, 600);
    canvas = document.createElement("canvas");
    getContext = jest.spyOn(canvas, "getContext").mockReturnValue(ctx);
  });

  afterEach(() => {
    getContext.mockRestore();
  });

  it("sizes the canvas and invokes the drawing function initially and on resize", () => {
    Object.defineProperty(window, "devicePixelRatio", {
      configurable: true,
      value: 2,
    });

    const setup = setupCanvas({ canvas, canvasFunction });

    expect(canvas.width).toBe(1600);
    expect(canvas.height).toBe(1200);
    expect(canvas.style.width).toBe("800px");
    expect(canvas.style.height).toBe("600px");
    expect(ctx.setTransform).toHaveBeenCalledWith(2, 0, 0, 2, 0, 0);
    expect(canvasFunction).toHaveBeenLastCalledWith({
      canvas,
      ctx,
      width: 800,
      height: 600,
    });

    setWindowSize(1000, 700);
    window.dispatchEvent(new Event("resize"));

    expect(canvas.width).toBe(2000);
    expect(canvas.height).toBe(1400);
    expect(canvasFunction).toHaveBeenLastCalledWith({
      canvas,
      ctx,
      width: 1000,
      height: 700,
    });

    setup.dispose();
  });

  it("stops redrawing after disposal", () => {
    const setup = setupCanvas({ canvas, canvasFunction });

    setup.dispose();
    window.dispatchEvent(new Event("resize"));

    expect(canvasFunction).toHaveBeenCalledTimes(1);
  });

  it("uses the specified aspect ratio", () => {
    const setup = setupCanvas({
      canvas,
      canvasFunction,
      aspectRatio: 1,
    });

    expect(canvas.style.width).toBe("800px");
    expect(canvas.style.height).toBe("800px");

    setup.dispose();
  });

  it("throws when a 2D drawing context is unavailable", () => {
    getContext.mockReturnValue(null);

    expect(() => setupCanvas({ canvas, canvasFunction })).toThrow(
      "Failed to get 2D context",
    );
  });
});
