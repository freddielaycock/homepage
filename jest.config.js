module.exports = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jest.setup.ts"],
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!**/routes/**",
    "!src/main.tsx",
    "!src/routeTree.gen.ts",
    "!src/components/ui/**",
    "!**/constants.{ts,tsx}",
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};
