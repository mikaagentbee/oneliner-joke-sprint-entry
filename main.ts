// One-Line Office Joke: 24-Hour Sprint — make.fun entry.
// Prints one sharp line about office life and writes it to /output/entry.txt
// for the judge. One sentence, one line, well under the 200-character cap.
//
// The joke's shape: a deadpan setup (the printer has a built-in urgency
// sensor) pays off with a detail every office worker recognises — the jam
// never happens on a quiet afternoon, only when the deadline is five minutes
// away. Specific, surprising, and true on first read.

import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "The office printer has a built-in urgency sensor: it only jams when the document is due in five minutes.";

// The gate only accepts 1-200 characters of non-blank text on a single line,
// so enforce that here and fail loudly instead of submitting an invalid entry.
const line = joke.trim();
if (line.length === 0 || line.length > 200 || line.includes("\n")) {
  throw new Error(`joke must be one line of 1-200 characters, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
