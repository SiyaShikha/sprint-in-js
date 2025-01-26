const jump = ([...code], cellNumber) => {
  const newCellNum = code[cellNumber + 1];
  return { code, newCellNum };
};

const copy = ([...code], cellNumber) => {
  code[code[cellNumber + 2]] = code[code[cellNumber + 1]];
  const newCellNum = cellNumber + 3;
  return { code, newCellNum };
};

const jumpIfEqual = ([...code], cellNumber) => {
  const newCellNum = code[code[cellNumber + 1]] === code[code[cellNumber + 2]]
    ? code[cellNumber + 3]
    : cellNumber + 4;
  return { code, newCellNum };
};

const jumpIfLess = ([...code], cellNumber) => {
  const newCellNum = code[code[cellNumber + 1]] < code[code[cellNumber + 2]]
    ? code[cellNumber + 3]
    : cellNumber + 4;
  return { code, newCellNum };
};

const add = ([...code], cellNumber) => {
  code[code[cellNumber + 3]] = code[code[cellNumber + 1]] +
    code[code[cellNumber + 2]];
  const newCellNum = cellNumber + 4;
  return { code, newCellNum };
};

const subtract = ([...code], cellNumber) => {
  code[code[cellNumber + 3]] = code[code[cellNumber + 1]] -
    code[code[cellNumber + 2]];
  const newCellNum = cellNumber + 4;
  return { code, newCellNum };
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
