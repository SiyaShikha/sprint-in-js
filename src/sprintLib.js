import { commands } from "./commands.js";
import { Memory } from "./memory.js";

const isValidNum = (num) => {
  return Number.isInteger(num) && num >= 0;
};

const getInputCode = () => {
  const inputCode = prompt("Enter sprint code : ");
  if (!inputCode) {
    throw { type: "noInputProvided", msg: "Please provide some input!" };
  }

  return inputCode;
};

const parseInputCode = (code) => {
  const parsedCode = [];
  code.trim().split(/\s+/).forEach((e) => {
    const num = +e;
    if (!isValidNum(num)) {
      throw { type: "invalid input", msg: "Invalid input provided!" };
    }
    parsedCode.push(num);
  });

  return parsedCode;
};

const execute = (memory, programCounter) => {
  const command = memory.getCellValue(programCounter);

  if (!(command in commands)) {
    throw { type: "invalid code", msg: "Check your input and try again!" };
  }
  return commands[command](memory, programCounter);
};

const display = (inputCode, executedCode) => {
  console.log("\nINPUT\n", inputCode);
  console.log("\nOUTPUT\n", executedCode);
};

const sprintRunner = (rawInputCode) => {
  const data = parseInputCode(rawInputCode);
  const memory = new Memory(data);
  let programCounter = 1;

  while (memory.getCellValue(programCounter) !== 9) {
    programCounter = execute(memory, programCounter);
  }

  return { inputCode: data, outputCode: memory.getData() };
};

export {
  display,
  execute,
  getInputCode,
  isValidNum,
  parseInputCode,
  sprintRunner,
};
