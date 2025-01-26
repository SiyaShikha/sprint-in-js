import { commands } from "./commands.js";

const isValidNum = (num) => {
  return Number.isInteger(num) && num >= 0;
};

const getInputCode = () => {
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

const getCodeCopy = (inputCode) => [0, ...inputCode];

const execute = (runtimeState, cellNumber) => {
  const command = runtimeState[cellNumber];

  if (!(command in commands)) {
    throw { type: "invalid code" };
  }

  const { code: updatedState, newCellNum } = commands[command](
    runtimeState,
    cellNumber,
  );

  return { updatedState, newCellNum };
};

const display = (inputCode, executedCode) => {
  console.log("\nINPUT\n", inputCode);
  console.log("\nOUTPUT\n", executedCode);
};

const sprintRunner = (rawInputCode) => {
  const parsedCode = parseInputCode(rawInputCode);
  let runtimeState = getCodeCopy(parsedCode);
  let cellNumber = 1;

  while (runtimeState[cellNumber] !== 9) {
    const result = execute(runtimeState, cellNumber);
    runtimeState = result.updatedState;
    cellNumber = result.newCellNum;
  }

  runtimeState.shift();
  return { inputCode: parsedCode, executedCode: runtimeState };
};

export {
  display,
  execute,
  getCodeCopy,
  getInputCode,
  isValidNum,
  parseInputCode,
  sprintRunner,
};
