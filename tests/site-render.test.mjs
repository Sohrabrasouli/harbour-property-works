import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the Harbour marketing experience", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Harbour Property Works/i);
  assert.match(html, /Care for every surface/i);
  assert.match(html, /Complete care for every space/i);
  assert.match(html, /Toronto &amp; GTA/i);
  assert.match(html, /Concept imagery/i);
  assert.doesNotMatch(html, /five[- ]star|award[- ]winning|guaranteed|licensed and insured/i);
});

test("keeps the project planner interactive and honest", async () => {
  const [planner, page, hero, motion, css] = await Promise.all([
    readFile(new URL("../app/project-planner.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/hero-showcase.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/site-motion.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(planner, /useState/);
  assert.match(planner, /Add project photos/);
  assert.match(planner, /Preview only — request delivery is not connected/);
  assert.match(planner, /This preview does not transmit details yet/);
  assert.match(planner, /value=\{name\}/);
  assert.match(planner, /value=\{contact\}/);
  assert.match(planner, /checked=\{consent\}/);
  assert.match(page, /Final scope, availability, timing and pricing are confirmed after assessment/);
  assert.match(hero, /Pause hero slideshow/);
  assert.match(hero, /setInterval/);
  assert.match(motion, /IntersectionObserver/);
  assert.match(css, /prefers-reduced-motion:reduce/);
  assert.doesNotMatch(page, /\(647\)|reviews|warranty|years in business/i);
});
