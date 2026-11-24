import { defineConfig } from "vitest/config";

// One project per test folder, so the command line, CI and the editor all agree on the suites.
// Run one with `vitest run --project <name>`; the npm scripts do this.
export default defineConfig({
  test: {
    projects: [
      { test: { name: "src", include: ["src/**/*.test.{ts,tsx}"] } },
      { test: { name: "scripts", include: ["scripts/**/*.test.ts"] } },
      { test: { name: "integration", include: ["tests/integration/**/*.test.ts"] } },
      { test: { name: "seed", include: ["tests/seed/**/*.test.ts"] } },
    ],
  },
});
