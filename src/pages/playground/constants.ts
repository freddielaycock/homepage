import { Bold } from "../../components/bold/Bold";
import type { CanvasFunction } from "../../components/canvas/Canvas.types";
import { ExampleCanvas } from "../../components/canvas/ExampleCanvas";
import { drawStraightLine } from "../../components/canvas/utils/draw-line";
import { drawQuadrilateral } from "../../components/canvas/utils/draw-quadrilateral";
import { drawText } from "../../components/canvas/utils/draw-text";
import { Page } from "../../components/page/Page";
import { TestComponent } from "../../components/test-component/TestComponent";
import { ThemeToggle } from "../../components/theme-toggle/ThemeToggle";
import type { PlaygroundEntry } from "./Playground.types";

export const PLAYGROUND_COMPONENTS: PlaygroundEntry[] = [
  {
    name: "Bold Text",
    component: Bold,
    id: "bold",
    props: {
      text: "This is bold text",
    },
  },
  {
    name: "Example Canvas",
    component: ExampleCanvas,
    id: "example-canvas",
    props: {
      canvasFunction: ({
        ctx,
        height,
        width,
      }: Parameters<CanvasFunction>[0]) => {
        const gradient = ctx.createLinearGradient(20, 0, 620, 0);
        gradient.addColorStop(0, "blue");
        gradient.addColorStop(0.5, "orange");
        gradient.addColorStop(1, "green");

        for (let index = 0; index < 30; index++) {
          drawStraightLine({
            ctx,
            startX: index * 20,
            startY: 0,
            endX: index / 20,
            endY: height,
            strokeStyle: "green",
          });
          drawQuadrilateral({
            ctx,
            startX: index * 20,
            startY: 0,
            width: 20,
            height: height,
            filled: index % 2 === 0,
            style: gradient,
          });
        }
        drawText({
          ctx,
          font: "32px Arial",
          textAlign: "right",
          textBaseline: "middle",
          text: "Playground Canvas",
          startX: width - 20,
          startY: height / 2,
        });
      },
    },
  },
  {
    name: "Page",
    component: Page,
    id: "page",
    props: {
      heading: "Test Page",
      id: "test-page",
    },
  },
  {
    name: "Test Component",
    component: TestComponent,
    id: "test-component",
    props: {
      text: "This is a test component",
    },
  },
  {
    name: "Theme Toggle",
    component: ThemeToggle,
    id: "theme-toggle",
    props: {},
  },
] as PlaygroundEntry[];
