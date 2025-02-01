const jump = (memory, programCounter) => {
  return memory.getCellValue(programCounter + 1);
};

const copy = (memory, programCounter) => {
  const valueToCopy = memory.getPointerValue(programCounter + 1);
  const resultCell = memory.getCellValue(programCounter + 2);
  memory.setCellValue(resultCell, valueToCopy);

  return programCounter + 3;
};

const jumpIfEqual = (memory, programCounter) => {
  const left = memory.getPointerValue(programCounter + 1);
  const right = memory.getPointerValue(programCounter + 2);

  return left === right
    ? memory.getCellValue(programCounter + 3)
    : programCounter + 4;
};

const jumpIfLess = (memory, programCounter) => {
  const left = memory.getPointerValue(programCounter + 1);
  const right = memory.getPointerValue(programCounter + 2);

  return left < right
    ? memory.getCellValue(programCounter + 3)
    : programCounter + 4;
};

const add = (memory, programCounter) => {
  const left = memory.getPointerValue(programCounter + 1);
  const right = memory.getPointerValue(programCounter + 2);
  const resultCell = memory.getCellValue(programCounter + 3);
  memory.setCellValue(resultCell, left + right);

  return programCounter + 4;
};

const subtract = (memory, cellNumber) => {
  const left = memory.getPointerValue(cellNumber + 1);
  const right = memory.getPointerValue(cellNumber + 2);
  const resultCell = memory.getCellValue(cellNumber + 3);
  memory.setCellValue(resultCell, left - right);

  return cellNumber + 4;
};

const commands = {
  1: add,
  2: subtract,
  3: jump,
  4: jumpIfEqual,
  5: jumpIfLess,
  7: copy,
};

export { add, commands, copy, jump, jumpIfEqual, jumpIfLess, subtract };
