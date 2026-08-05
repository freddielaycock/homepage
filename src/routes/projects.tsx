import { createFileRoute } from "@tanstack/react-router";

import { Projects } from "../pages/projects/Projects";

const ProjectsPage = () => <Projects />;

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
});
