import { commands } from "./commands.js";

const isValidNum = (num) => {
  return Number.isInteger(num) && num >= 0;
};

export const getInputCode = () => {
  const inputCode = prompt("Enter sprint code : ");
  if (!inputCode) {
    throw { type: "noInputProvided" };
  }

  return inputCode;
};

const parseInputCode = (code) => {
  const parsedCode = [];
  code.trim().split(/\s+/).forEach((e) => {
    const num = +e;
    if (!isValidNum(num)) {
      throw { type: "invalid input" };
    }
    parsedCode.push(num);
  });

  return parsedCode;
};

export const getCodeCopy = (inputCode) => [0, ...inputCode];

export const execute = (runtimeState, cellNumber) => {
  const command = runtimeState[cellNumber];

  if (!(command in commands)) {
    throw { type: "invalid code" };
  }

  return commands[command]([runtimeState, cellNumber]);
};

export const display = (inputCode, executedCode) => {
  console.log("\nINPUT\n", inputCode);
  console.log("\nOUTPUT\n", executedCode);
};

export const sprintRunner = (rawInputCode) => {
  const parsedCode = parseInputCode(rawInputCode);
  const runtimeState = getCodeCopy(parsedCode);
  let cellNumber = 1;

  while (runtimeState[cellNumber] !== 9) {
    cellNumber = execute(runtimeState, cellNumber);
  }

  runtimeState.shift();
  return { inputCode: parsedCode, executedCode: runtimeState };
};
