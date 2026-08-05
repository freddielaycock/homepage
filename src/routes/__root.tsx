import { Box } from "@chakra-ui/react";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

import { ThemeToggle } from "../components/theme-toggle/ThemeToggle";

// excluded from production bundle via process.env.NODE_ENV define in esbuild
const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null
    : lazy(() =>
        import("@tanstack/react-router-devtools").then((mod) => ({
          default: mod.TanStackRouterDevtools,
        })),
      );

const RootLayout = () => (
  <>
    <Box px={2} py={4} display="flex" alignItems="center">
      <Box display="flex" gap={4}>
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/career" className="[&.active]:font-bold">
          Career
        </Link>{" "}
        <Link to="/playground" className="[&.active]:font-bold">
          Playground
        </Link>
      </Box>
      <Box justifyContent="flex-end" display="flex" flex={1}>
        <ThemeToggle />
      </Box>
    </Box>
    <hr />
    <Outlet />
    <Suspense>
      <TanStackRouterDevtools />
    </Suspense>
  </>
);

export const Route = createRootRoute({ component: RootLayout });
