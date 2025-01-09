const jump = ([code, cellNumber]) => {
  return code[cellNumber + 1];
};

const copy = ([code, cellNumber]) => {
  console.log("copied");
  code[code[cellNumber + 2]] = code[code[cellNumber + 1]];
  return cellNumber + 3;
};

const jumpIfEqual = ([code, cellNumber]) => {
  console.log("jump if equal");
  if (code[code[cellNumber + 1]] === code[code[cellNumber + 2]]) {
    return code[cellNumber + 3];
  }
  return cellNumber + 4;
};

const jumpIfLess = ([code, cellNumber]) => {
  console.log("jump if less");
  if (code[code[cellNumber + 1]] < code[code[cellNumber + 2]]) {
    return code[cellNumber + 3];
  }
  return cellNumber + 4;
};

const add = ([code, cellNumber]) => {
  console.log("add");
  code[code[cellNumber + 3]] =
    code[code[cellNumber + 1]] + code[code[cellNumber + 2]];
  return cellNumber + 4;
};

const subtract = ([code, cellNumber]) => {
  console.log("subtract");
  code[code[cellNumber + 3]] =
    code[code[cellNumber + 1]] - code[code[cellNumber + 2]];
  return cellNumber + 4;
};

export const commands = {
  1: add,
  2: subtract,
  3: jump,
  4: jumpIfEqual,
  5: jumpIfLess,
  7: copy,
  9: "stop",
};
