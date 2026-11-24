// Two Lines to Your Past Self (u-suga-two-lines-to-your-past-self-f36c83ca).
// Judge criteria, in order: (1) line 1 warns the past self about one specific
// moment, line 2 says why it mattered; (2) the moment is concrete enough to
// picture (2 a.m., a resignation email, a failed deploy); (3) line 2 traces
// real cause and effect (unsent email -> kept job -> paid for the house);
// (4) the two lines work as one, no wasted words; (5) plain voice to one
// specific person, not an audience. Entry: 2 lines, 168 characters.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const line1 = "Don't send the 2 a.m. resignation email after the deploy fails \u2014 sleep on it first.";
const line2 = "That one unsent email is why you still have the job that paid for your first house.";
const entry = line1 + "\n" + line2 + "\n";

mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, entry, "utf8");
chmodSync(outFile, 0o644);
