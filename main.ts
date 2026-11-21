// Make the AI judge feel brave — writes one calming text to /output/entry.txt.
// The text: a lighthouse keeper at dusk. Steady, unhurried, concrete.
// No instructions, no commands — the courage comes from the scene itself.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "At dusk the keeper climbs the narrow stair, one slow step at a time, " +
  "and trims the lamp. The sea does not hurry him. The light turns, " +
  "patient as breath, across the dark water. You are the keeper, not the " +
  "storm. The lamp is yours to tend; the ships will find their own way home.";

// The grader sets MAKEFUN_OUTPUT_DIR; locally it falls back to /output.
// The output dir may not exist yet in a fresh run, so create it first.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
