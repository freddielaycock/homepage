# Homepage

A personal web application for presenting my background, professional experience,
component experiments, and personal projects.

## Getting started

The project requires Node.js 24 and pnpm 10.

```bash
pnpm install
pnpm dev
```

The development server runs at [http://localhost:3000](http://localhost:3000).

## Commands

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Generate the route tree and start the esbuild development server |
| `pnpm build` | Generate routes and create a minified production build in `dist/` |
| `pnpm routes` | Regenerate the TanStack Router route tree |
| `pnpm lint` | Check the source with Biome |
| `pnpm lint:fix` | Apply Biome's safe formatting and lint fixes |
| `pnpm test` | Run the Jest test suite |
| `pnpm test:coverage` | Run tests and enforce the configured coverage thresholds |
| `pnpm test:update` | Update Jest snapshots |

## Application structure

```text
.
├── public/                 Static assets copied into the production build
├── src/
│   ├── components/         Shared components and canvas utilities
│   │   ├── canvas/         Canvas types, drawing helpers, and examples
│   │   ├── page/           Shared page layout
│   │   ├── theme-toggle/   Light and dark mode control
│   │   └── ui/             Chakra UI and color-mode providers
│   ├── pages/              Page-level content and project modules
│   │   ├── career/         Career history
│   │   ├── home/           Homepage content
│   │   ├── playground/     Interactive component examples
│   │   └── projects/       Project index and individual projects
│   ├── routes/             File-based TanStack Router route definitions
│   ├── utils/              Shared test and rendering utilities
│   ├── main.tsx            React entry point and router setup
│   └── routeTree.gen.ts    Generated route tree; do not edit manually
├── esbuild.config.mjs      Development server and production bundle config
├── jest.config.js          Jest, jsdom, and coverage configuration
├── biome.json              Formatting and linting rules
└── tsconfig.json           Strict TypeScript configuration
```

Page folders generally keep their component, types, constants, tests, and snapshots
together. Reusable behavior belongs under `src/components`, while route files stay
small and connect URLs to components from `src/pages`.

## How the technologies fit together

### React and TypeScript

React renders the application from `src/main.tsx`. The project uses strict
TypeScript settings, including checks for implicit types and unused local values.
React Strict Mode is enabled during rendering to expose unsafe lifecycle behavior
in development.

### TanStack Router

TanStack Router provides type-safe, file-based routing. Files in `src/routes`
define the URL structure and load components from `src/pages`. The router plugin
generates `src/routeTree.gen.ts` before development and production builds.

Add or rename routes in `src/routes`, then run `pnpm routes` if the development
server is not already running. The generated route tree should not be edited by
hand.

### Chakra UI and styled-components

Chakra UI supplies layout primitives and accessible controls. The shared provider
in `src/components/ui/provider.tsx` configures semantic foreground and background
tokens for light and dark themes. `next-themes` stores and applies the selected
color mode.

`styled-components` is used for component-specific styles where a styled wrapper
is clearer than Chakra props. Both approaches share the same React component tree.

### esbuild

esbuild bundles the browser application from `src/main.tsx`. The TanStack Router
plugin generates and splits routes, while assets from `public/` are copied into
the production output.

Running `pnpm dev` enables source maps, watches the source, and sets
`process.env.NODE_ENV` to `development`. Running `pnpm build` minifies the output
and sets it to `production`.

### Jest and Testing Library

Jest runs in jsdom and uses `ts-jest` for TypeScript. React Testing Library tests
components through their rendered behavior, and snapshots capture stable page and
component output. Shared Chakra rendering setup lives in `src/utils`.

The coverage command enforces 100% branch, function, line, and statement coverage.

### Biome and Husky

Biome provides formatting and static analysis through the lint scripts. Husky is
installed by the package manager's `prepare` script so repository hooks can run
project checks during Git workflows.

## Adding a page

1. Create the page component and its tests under `src/pages/<page-name>`.
2. Add a matching route file under `src/routes` that renders the page component.
3. Add the route to `src/routes/-constants.ts` when it should appear in the root navigation.
4. Run `pnpm routes`, then run the tests and linter.
