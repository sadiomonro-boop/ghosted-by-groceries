// The One-Line Laugh — make.fun bounty u-ronigrv-the-one-line-laugh-7ccca46f
// Writes exactly one funny line (a single sentence, under 200 characters)
// to /output/entry.txt. Stdlib only, no network, no secrets, no eval.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My smart fridge texts me when the milk expires, so now even my groceries ghost me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
