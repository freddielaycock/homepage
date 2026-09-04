import { createFileRoute } from "@tanstack/react-router";

import { Rhythms } from "../pages/projects/modules/rhythms/Rhythms";

export const Route = createFileRoute("/projects/rhythms")({
  component: Rhythms,
});
