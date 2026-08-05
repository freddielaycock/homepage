import { Box } from "@chakra-ui/react";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { ThemeToggle } from "../components/theme-toggle/ThemeToggle";

const RootLayout = () => (
  <>
    <Box px={2} py={4} display="flex" alignItems="center">
      <Box display="flex" gap={4}>
        <Link to="/" className="[&.active]:font-bold">
          Home
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
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
