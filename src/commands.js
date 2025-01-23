const jump = ([code, cellNumber]) => {
  return code[cellNumber + 1];
};

const copy = ([code, cellNumber]) => {
  code[code[cellNumber + 2]] = code[code[cellNumber + 1]];
  return cellNumber + 3;
};

const jumpIfEqual = ([code, cellNumber]) => {
  if (code[code[cellNumber + 1]] === code[code[cellNumber + 2]]) {
    return code[cellNumber + 3];
  }
  return cellNumber + 4;
};

const jumpIfLess = ([code, cellNumber]) => {
  if (code[code[cellNumber + 1]] < code[code[cellNumber + 2]]) {
    return code[cellNumber + 3];
  }
  return cellNumber + 4;
};

const add = ([code, cellNumber]) => {
  code[code[cellNumber + 3]] = code[code[cellNumber + 1]] +
    code[code[cellNumber + 2]];
  return cellNumber + 4;
};

const subtract = ([code, cellNumber]) => {
  code[code[cellNumber + 3]] = code[code[cellNumber + 1]] -
    code[code[cellNumber + 2]];
  return cellNumber + 4;
};

export const commands = {
  1: add,
  2: subtract,
  3: jump,
  4: jumpIfEqual,
  5: jumpIfLess,
  7: copy,
};
