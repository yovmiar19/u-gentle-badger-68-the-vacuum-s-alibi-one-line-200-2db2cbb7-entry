// The Vacuum's Alibi: One Line, 200 Characters
// make.fun competition u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7
//
// The entry is a single line: the funniest excuse a robot vacuum can give
// for missing a spot, at most 200 characters. The house judge (z-ai/glm-5.3-flash,
// pairwise) weighs, in order: (1) a funny one-line excuse for a missed spot,
// (2) a joke that actually lands, not a cute observation about dust,
// (3) deadpan machine voice, a little smug about its sensors, schedule and
// battery, (4) surprise through a specific unexpected detail, and (5) tightness,
// with the punch sitting at the end.
//
// Craft notes for this line:
// - Deadpan log voice ("Lidar log 04:12") puts the machine itself on stage.
// - "Load-bearing dust" is the surprise: a crumb reclassified as architecture,
//   a specific detail nobody expects instead of a stock appliance joke.
// - The battery vetoes the removal, smug about its own authority over the
//   schedule — the machine's internal bureaucracy is the joke's engine.
// - "Under the sofa" grounds the excuse in the classic missed spot: the one
//   place every vacuum quietly gives up on, which makes the alibi specific
//   instead of generic.
// - The punch lands last: the crumb "has seniority over my warranty" —
//   the dust outranks the machine, which is why the spot stays missed.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The entry line, written by hand in this session. 200 characters max.
const ENTRY =
  "Lidar log 04:12: crumb detected under the sofa, classified load-bearing dust, removal vetoed by my battery — the crumb has seniority over my warranty.";

// The gate counts characters: 1 to 200, not only whitespace. Keep the line
// exactly as written — no trailing newline, no extra padding.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`Entry is ${ENTRY.length} characters; the gate allows 1-200.`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("Entry must not be only whitespace.");
}
if (ENTRY.includes("\n")) {
  throw new Error("Entry must be a single line.");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${join(outDir, "entry.txt")}`);
console.log(ENTRY);
