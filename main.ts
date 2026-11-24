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
