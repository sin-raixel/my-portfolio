import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

// axe checks the rendered page against WCAG 2.0 and 2.1 levels A and AA: color contrast,
// labels, names on buttons and links, landmarks, and valid ARIA.
const paths = ["/", "/projects", "/about", "/contact", "/this-page-does-not-exist"];
const tags = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"];

for (const path of paths) {
  test(`${path} has no WCAG A or AA violations`, async ({ page }, testInfo) => {
    await page.goto(path);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

    const results = await new AxeBuilder({ page }).withTags(tags).analyze();

    await testInfo.attach("axe-results", {
      body: JSON.stringify(results.violations, null, 2),
      contentType: "application/json",
    });

    // A short, readable summary in the test output: rule, impact, and the first few elements.
    const summary = results.violations.map(
      (violation) =>
        `${violation.id} (${violation.impact}): ${violation.help}\n    ${violation.nodes
          .slice(0, 4)
          .map((node) => node.target.join(" "))
          .join("\n    ")}`,
    );
    expect(summary).toEqual([]);
  });
}

test("the mobile menu has no violations when open", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();
  const results = await new AxeBuilder({ page }).withTags(tags).analyze();
  expect(results.violations.map((violation) => violation.id)).toEqual([]);
});
