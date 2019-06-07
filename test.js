import test from "ava";
import m from ".";

test("snapshot yaml", t => {
  const input = `
---
hello: world
  `;
  t.snapshot(m(input));
});

test("snapshot nest yaml", t => {
  const input = `
---
welcome:
  to:
    yaml
  `;
  t.snapshot(m(input));
});
