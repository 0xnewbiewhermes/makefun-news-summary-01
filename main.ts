// Entry for make.fun's "Write the best summary of 11 November's world news" bounty.
//
// The summary itself lives in summary.txt beside this file. This program reads it
// and writes it, byte for byte, to entry.txt in the output directory. It uses no
// network, no clock and no randomness, so every run produces identical bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const summary = readFileSync(join(here, 'summary.txt'));

// Guard the gate's three rules before writing anything: the entry must be
// 1 to 2,000 characters and not only white space. Failing loudly here beats
// producing an invalid entry file.
const text = summary.toString('utf8');
if (text.length < 1 || text.length > 2000 || text.trim().length === 0) {
  throw new Error(`summary.txt must hold 1 to 2,000 non-blank characters; it holds ${text.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), summary);
