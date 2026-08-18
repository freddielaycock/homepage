import { Bold } from "../../components/bold/Bold";
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
