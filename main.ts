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
// Craft notes for this line (revision 1):
// - "Skipped under the sofa at 04:12" opens in deadpan log voice: the machine
//   itself reports, timestamped, no apology — it simply did not go there.
// - "That toast crumb" is the specific detail: not any crumb, a toast crumb,
//   which makes the missed spot concrete instead of generic.
// - "Has seniority over my warranty" is the machine's internal bureaucracy:
//   the dust outranks the machine, so the spot stays missed by policy.
// - The punch lands last: the crumb "unionized with the dust bunny" — the dust
//   organised, a visual absurd image nobody expects from an appliance.
//   The dust bunny is the one household image every reader already knows,
//   which is why the union joke lands on the first read.
// - One sentence, 115 characters: every word earns its place, nothing left
//   to explain the joke.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The entry line, written by hand in this session. 200 characters max.
const ENTRY =
  "Skipped under the sofa at 04:12: that toast crumb has seniority over my warranty and unionized with the dust bunny.";

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
