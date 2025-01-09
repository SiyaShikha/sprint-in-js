import { commands } from "./commands.js";

const inputCode = prompt("Enter sprint code : ")
  .split(" ")
  .map((e) => +e);

const finalCode = Array.from(inputCode);
finalCode.unshift(0);

const runCode = (cellNumber) => {
  const command = finalCode[cellNumber];
  if (command in commands) {
    return commands[command]([finalCode, cellNumber]);
  }
};

const start = () => {
  let cellNumber = 1;

  while (finalCode[cellNumber] !== 9) {
    cellNumber = runCode(cellNumber);
  }

  console.log(inputCode);
  finalCode.shift();
  console.log(finalCode);
};

start();
