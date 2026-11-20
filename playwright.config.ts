import { defineConfig, devices } from "@playwright/test";

const port = 3000;
const baseURL = `http://localhost:${port}`;
const inCI = Boolean(process.env.CI);

// End-to-end tests run against the production build, the same thing visitors get.
// In CI the build step has already run, so the server only has to start.
export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: inCI,
  retries: inCI ? 1 : 0,
  reporter: inCI ? [["github"], ["html", { open: "never" }]] : "list",
  use: {
    baseURL,
    // Turns off the starfield, cursor trail, and scroll animations, so tests don't
    // wait on motion and axe never reads text that is halfway through a fade.
    reducedMotion: "reduce",
    trace: "on-first-retry",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: inCI ? "npm run start" : "npm run build && npm run start",
    url: baseURL,
    reuseExistingServer: !inCI,
    timeout: 180_000,
  },
});
