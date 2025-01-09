import { commands } from "./commands.js";

const getInputCode = () => {
  const inputCode = prompt("Enter sprint code : ");
  return inputCode.split(" ").map((e) => +e);
};

const getCodeCopy = (inputCode) => {
  const codeCopy = Array.from(inputCode);
  codeCopy.unshift(0);
  return codeCopy;
};

const execute = (codeCopy, cellNumber) => {
  const command = codeCopy[cellNumber];
  if (command in commands) {
    return commands[command]([codeCopy, cellNumber]);
  }
};

const display = (inputCode, outputCode) => {
  console.log("\nINPUT\n", inputCode);
  outputCode.shift();
  console.log("\nOUTPUT\n", outputCode);
};

const start = () => {
  const inputCode = getInputCode();
  const codeCopy = getCodeCopy(inputCode);
  let cellNumber = 1;

  while (codeCopy[cellNumber] !== 9) {
    cellNumber = execute(codeCopy, cellNumber);
  }

  display(inputCode, codeCopy);
};

start();
