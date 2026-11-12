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

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), summary);
