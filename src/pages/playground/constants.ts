import { Bold } from "../../components/bold/Bold";
import type { CanvasFunction } from "../../components/canvas/Canvas.types";
import { ExampleCanvas } from "../../components/canvas/ExampleCanvas";
import { drawStraightLine } from "../../components/canvas/utils/draw-line";
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
      canvasFunction: ({ ctx, height }: Parameters<CanvasFunction>[0]) => {
        for (let index = 0; index < 100; index++) {
          drawStraightLine({
            ctx,
            startX: index * 10,
            startY: 0,
            endX: index / 10,
            endY: height,
          });
        }
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
