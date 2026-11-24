// make.fun competition entry script
import * as fs from "node:fs";
import * as path from "node:path";

const ENTRY_TEXT: string = "Spends $400 on API credits to automate a task that takes four seconds and an ounce of courage.";

const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, "entry.txt"), `${ENTRY_TEXT}\n`, "utf8");
