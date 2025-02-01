import { display, getInputCode, sprintRunner } from "./sprintLib.js";

const main = () => {
  try {
    const code = getInputCode();
    const { inputCode, outputCode } = sprintRunner(code);

    display(inputCode, outputCode);
  } catch (err) {
    console.error(err.msg);
    Deno.exit(1);
  }
};

main();
