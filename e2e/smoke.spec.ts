import { expect, test } from "@playwright/test";
import { certifications, hero, nav, profile, projects } from "../app/data/portfolio";

const pages = [
  { path: "/", title: /John Raizel Bacang/ },
  { path: "/projects", title: /^Projects \|/ },
  { path: "/about", title: /^About me \|/ },
  { path: "/contact", title: /^Contact \|/ },
];

test.describe("pages", () => {
  for (const { path, title } of pages) {
    test(`${path} loads with a title and exactly one h1`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.ok()).toBe(true);
      await expect(page).toHaveTitle(title);
      await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    });

    test(`${path} has no console errors or uncaught exceptions`, async ({ page }) => {
      const problems: string[] = [];
      page.on("pageerror", (error) => problems.push(`exception: ${error.message}`));
      page.on("console", (message) => {
        if (message.type() === "error") problems.push(`console: ${message.text()}`);
      });
      await page.goto(path);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
      expect(problems).toEqual([]);
    });

    test(`${path} opens external links safely and gives every image an alt`, async ({ page }) => {
      await page.goto(path);
      const unsafe = await page
        .locator('a[target="_blank"]')
        .evaluateAll((links) =>
          links
            .filter((link) => !/\b(noreferrer|noopener)\b/.test(link.getAttribute("rel") ?? ""))
            .map((link) => link.getAttribute("href")),
        );
      expect(unsafe, "links with target=_blank but no rel=noreferrer").toEqual([]);
      await expect(page.locator("img:not([alt])")).toHaveCount(0);
    });
  }

  test("an unknown address shows the 404 page", async ({ page }) => {
    const response = await page.goto("/this-page-does-not-exist");
    expect(response?.status()).toBe(404);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Lost");
    await page.getByRole("link", { name: "Back to Home" }).click();
    await expect(page).toHaveURL("/");
  });
});

test.describe("navigation on desktop", () => {
  for (const item of nav) {
    test(`the ${item.label} link goes to ${item.href} and is marked as current`, async ({ page }) => {
      await page.goto(item.href === "/" ? "/contact" : "/");
      const main = page.getByRole("navigation", { name: "Main" });
      await main.getByRole("link", { name: item.label, exact: true }).click();
      await expect(page).toHaveURL(item.href);
      await expect(main.getByRole("link", { name: item.label, exact: true })).toHaveAttribute(
        "aria-current",
        "page",
      );
    });
  }

  test("the CV button in the navbar points at a PDF that exists", async ({ page, request }) => {
    await page.goto("/");
    const cv = page.getByRole("banner").getByRole("link", { name: "Download CV (PDF)" });
    await expect(cv).toHaveAttribute("href", hero.resume);
    await expect(cv).toHaveAttribute("download", "");
    const response = await request.get(hero.resume);
    expect(response.ok()).toBe(true);
    expect(response.headers()["content-type"]).toContain("application/pdf");
  });

  test("the Home hero links to the Quizmos project panel", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: hero.intro.highlight, exact: true }).click();
    await expect(page).toHaveURL(/\/projects#project-quizmos$/);
    await expect(page.locator("#project-quizmos")).toBeInViewport();
  });
});

test.describe("navigation on a phone", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("the menu opens, goes to a page, and closes", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("#mobile-menu")).toBeHidden();

    await page.getByRole("button", { name: "Open menu" }).click();
    await expect(page.getByRole("button", { name: "Close menu" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    await page.locator("#mobile-menu").getByRole("link", { name: "Projects" }).click();

    await expect(page).toHaveURL("/projects");
    await expect(page.locator("#mobile-menu")).toBeHidden();
  });

  test("Escape closes the menu and puts focus back on its button", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Open menu" }).click();
    await expect(page.locator("#mobile-menu")).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(page.locator("#mobile-menu")).toBeHidden();
    await expect(page.getByRole("button", { name: "Open menu" })).toBeFocused();
  });
});

test.describe("projects", () => {
  test("every project has a panel with its title", async ({ page }) => {
    await page.goto("/projects");
    for (const project of projects) {
      await expect(page.locator(`#project-${project.slug}`)).toBeAttached();
      await expect(page.locator(`#project-${project.slug}-title`)).toContainText(project.title);
    }
  });

  test("project links point where portfolio.ts says they do", async ({ page }) => {
    await page.goto("/projects");
    for (const project of projects) {
      const panel = page.locator(`#project-${project.slug}`);
      if (project.href) await expect(panel.locator(`a[href="${project.href}"]`).first()).toBeAttached();
      if (project.repo) await expect(panel.locator(`a[href="${project.repo}"]`).first()).toBeAttached();
    }
  });

  test("screenshots, the resume, and certificate files are all served", async ({ request }) => {
    const files = [
      hero.photo,
      hero.resume,
      ...projects.flatMap((project) => project.screenshots?.map((shot) => shot.src) ?? []),
      ...certifications.flatMap((item) => (item.link ? [item.link] : [])),
    ];
    for (const file of files) {
      const response = await request.get(encodeURI(file));
      expect(response.ok(), `${file} should be served`).toBe(true);
    }
  });
});

test.describe("contact", () => {
  test("the email menu opens, offers the right address, and closes with Escape", async ({ page }) => {
    await page.goto("/contact");
    const button = page.getByRole("button", { name: "Email me" });
    await button.click();
    await expect(button).toHaveAttribute("aria-expanded", "true");
    await expect(page.getByRole("link", { name: "Open in mail app" })).toHaveAttribute(
      "href",
      new RegExp(`^mailto:${profile.email}`),
    );

    await page.keyboard.press("Escape");
    await expect(button).toHaveAttribute("aria-expanded", "false");
    await expect(button).toBeFocused();
  });

  test("every social link from the profile is on the page", async ({ page }) => {
    await page.goto("/contact");
    for (const link of profile.links.filter((item) => item.href.startsWith("http"))) {
      await expect(page.locator(`a[href="${link.href}"]`).first()).toBeAttached();
    }
  });
});
