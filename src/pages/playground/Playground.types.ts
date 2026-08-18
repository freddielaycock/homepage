import type { ComponentType } from "react";

export type PlaygroundEntry<P extends object = object> = {
  name: string;
  component: ComponentType<P>;
  id: string;
  props: P;
  children?: React.ReactNode;
};
