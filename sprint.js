import { display, getInputCode, sprintRunner } from "./src/sprintLib.js";

const main = () => {
  try {
    const code = getInputCode();
    const { inputCode, executedCode } = sprintRunner(code);
    display(inputCode, executedCode);
  } catch (err) {
    console.error(err);
    Deno.exit(1);
  }
};

main();
