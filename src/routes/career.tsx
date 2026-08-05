import { createFileRoute } from "@tanstack/react-router";

import { Career } from "../pages/career/Career";

const CareerPage = () => <Career />;

export const Route = createFileRoute("/career")({
  component: CareerPage,
});
