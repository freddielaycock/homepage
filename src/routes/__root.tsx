import { Box, Link } from "@chakra-ui/react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { lazy, Suspense, useState } from "react";

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

const routes = [
  {
    id: "home",
    title: "Home",
    path: "/",
  },
  {
    id: "career",
    title: "Career",
    path: "/career",
  },
  {
    id: "playground",
    title: "Playground",
    path: "/playground",
  },
  {
    id: "projects",
    title: "Projects",
    path: "/projects",
  },
];

const RootLayout = () => {
  const [active, setActive] = useState(window.location.pathname);

  return (
    <>
      <Box p={2} display="flex" alignItems="center">
        <Box display="flex" gap={4}>
          {routes.map(({ id, title, path }) => (
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
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  );
};

export const Route = createRootRoute({ component: RootLayout });
