import { describe, it } from "jsr:@std/testing/bdd";
import { assertEquals } from "jsr:@std/assert";
import { add, copy, jumpIfEqual, subtract } from "../src/commands.js";
import { jumpIfLess } from "../src/commands.js";
import { jump } from "../src/commands.js";

describe("add", () => {
  it("should return updated code and updated cellNumber", () => {
    const code = [0, 3, 9, 1, 1, 2, 7, 0];
    const cn = 3;
    const expected = { code: [0, 3, 9, 1, 1, 2, 7, 12], newCellNum: 7 };
    assertEquals(add(code, cn), expected);
  });
});

describe("subtract", () => {
  it("should return updated code and updated cellNumber", () => {
    const code = [0, 3, 9, 2, 2, 1, 7, 0];
    const cn = 3;
    const expected = { code: [0, 3, 9, 2, 2, 1, 7, 6], newCellNum: 7 };
    assertEquals(subtract(code, cn), expected);
  });
});

describe("copy", () => {
  it("should return updated code and updated cellNumber", () => {
    const code = [0, 3, 9, 7, 2, 1, 9];
    const cn = 3;
    const expected = { code: [0, 9, 9, 7, 2, 1, 9], newCellNum: 6 };
    assertEquals(copy(code, cn), expected);
  });
});

describe("jump", () => {
  it("should jump to specified cellNumber", () => {
    const code = [0, 3, 9, 3, 1];
    const cn = 3;
    const expected = { code: [0, 3, 9, 3, 1], newCellNum: 1 };
    assertEquals(jump(code, cn), expected);
  });
});

describe("jumpIfEqual", () => {
  it("should jump to the specified cellNumber, if equal", () => {
    const code = [0, 1, 1, 4, 2, 1, 5, 9];
    const cn = 3;
    const expected = { code: [0, 1, 1, 4, 2, 1, 5, 9], newCellNum: 5 };
    assertEquals(jumpIfEqual(code, cn), expected);
  });

  it("should proceed to the next instruction, if not equal", () => {
    const code = [0, 1, 2, 4, 2, 1, 5, 9];
    const cn = 3;
    const expected = { code: [0, 1, 2, 4, 2, 1, 5, 9], newCellNum: 7 };
    assertEquals(jumpIfEqual(code, cn), expected);
  });
});

describe("jumpIfLess", () => {
  it("should jump to the specified cellNumber, if less", () => {
    const code = [0, 1, 2, 5, 1, 2, 5, 9];
    const cn = 3;
    const expected = { code: [0, 1, 2, 5, 1, 2, 5, 9], newCellNum: 5 };
    assertEquals(jumpIfLess(code, cn), expected);
  });

  it("should proceed to the next instruction, if equal", () => {
    const code = [0, 1, 1, 5, 2, 1, 5, 9];
    const cn = 3;
    const expected = { code: [0, 1, 1, 5, 2, 1, 5, 9], newCellNum: 7 };
    assertEquals(jumpIfLess(code, cn), expected);
  });

  it("should proceed to the next instruction, if greater", () => {
    const code = [0, 1, 3, 5, 2, 1, 5, 9];
    const cn = 3;
    const expected = { code: [0, 1, 3, 5, 2, 1, 5, 9], newCellNum: 7 };
    assertEquals(jumpIfLess(code, cn), expected);
  });
});
