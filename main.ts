// The Houseplant Out-of-Office — make.fun entry.
// Writes the entry text to <output dir>/entry.txt (default /output).
// The grader's gate: UTF-8 text of 1 to 120 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Out of office: I have been dying on this windowsill since February. Urgent? Water me first, then we will talk.";

const MAX_CHARS = 120;

// Fail loudly instead of writing an entry the gate would reject:
// the entry must be 1-120 characters and not only whitespace.
const chars = [...ENTRY].length;
if (ENTRY.trim().length === 0 || chars > MAX_CHARS) {
  throw new Error(
    `Entry is invalid: ${chars} characters (must be 1-${MAX_CHARS}, not only whitespace).`,
  );
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${join(outDir, "entry.txt")}`);
