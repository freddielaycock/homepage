import { Box, Link } from "@chakra-ui/react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { useState } from "react";

import { ThemeToggle } from "../components/theme-toggle/ThemeToggle";
import { ROUTES } from "./-constants";
import type { RouteType } from "./-types";

const RootLayout = () => {
  const [active, setActive] = useState(window.location.pathname);

  return (
    <>
      <Box p={2} display="flex" alignItems="center">
        <Box display="flex" gap={4}>
          {ROUTES.map(({ id, title, path }: RouteType) => (
            <Link
              key={id}
              href={path}
              onClick={() => setActive(path)}
              fontWeight={active === path ? "bold" : "normal"}
            >
              {title}
            </Link>
          ))}
        </Box>
        <Box justifyContent="flex-end" display="flex" flex={1}>
          <ThemeToggle />
        </Box>
      </Box>
      <hr />
      <Outlet />
    </>
  );
};

export const Route = createRootRoute({ component: RootLayout });
