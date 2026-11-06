import assert from "node:assert/strict";
import { test } from "node:test";
// @ts-expect-error node --test needs the extension, the app's tsconfig rejects it
import { gitGraphPaths } from "./gitGraph.ts";

test("trunk skips branch commits, branch leaves the commit above and rejoins the one below", () => {
  const { trunk, branches } = gitGraphPaths(
    [0, 200, 400, 600],
    [false, true, false, false],
  );
  assert.equal(trunk, "M8 0V600");
  assert.deepEqual(branches, [
    "M8 0C8 20 28 20 28 40V360C28 380 8 380 8 400",
  ]);
});

test("a branch with no commit above or below draws nothing", () => {
  assert.deepEqual(gitGraphPaths([0, 200], [true, false]).branches, []);
  assert.deepEqual(gitGraphPaths([0, 200], [false, true]).branches, []);
});
