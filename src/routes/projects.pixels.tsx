import { createFileRoute } from "@tanstack/react-router";

import { Pixels } from "../pages/projects/modules/pixels/Pixels";

export const Route = createFileRoute("/projects/pixels")({
  component: Pixels,
});
