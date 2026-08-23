import playwright from "/Users/davidseeley/Developer/Playwright/node_modules/playwright/index.js";
import path from "node:path";
import { pathToFileURL } from "node:url";

const { chromium } = playwright;
const root = path.resolve(new URL("..", import.meta.url).pathname);
const html = pathToFileURL(path.join(root, "rebuild/deck.html")).toString();
const exportsDir = path.join(root, "exports");

const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({
  viewport: { width: 1920, height: 1080 },
  deviceScaleFactor: 1,
});

async function exportPdf(theme, filename) {
  const url = theme === "light" ? `${html}?theme=light` : html;
  await page.goto(url, { waitUntil: "networkidle" });
  await page.pdf({
    path: path.join(exportsDir, filename),
    printBackground: true,
    width: "8.5in",
    height: "11in",
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
    preferCSSPageSize: true,
  });
}

await exportPdf("dark", "netsirv-sop-document-ecosystem-rebuilt-dark.pdf");
await exportPdf("light", "netsirv-sop-document-ecosystem-rebuilt-white.pdf");

await browser.close();
