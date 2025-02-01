import { describe, it } from "jsr:@std/testing/bdd";
import {
  assert,
  assertEquals,
  assertFalse,
  assertThrows,
} from "jsr:@std/assert";
import { isValidNum, parseInputCode, sprintRunner } from "../src/sprintLib.js";

describe("isValidNum", () => {
  it("should return true, for a positive integer", () => {
    assert(isValidNum(10));
  });

  it("should return true, for a zero", () => {
    assert(isValidNum(0));
  });

  it("should return false, for negative number", () => {
    assertFalse(isValidNum(-1));
  });
});

describe("parseInputCode", () => {
  it("should parse string of space-separated numbers into an array of numbers", () => {
    assertEquals(parseInputCode("0 1 2 3 4"), [0, 1, 2, 3, 4]);
  });

  it("should throw error when input contains negative numbers", () => {
    const expectedErr = { type: "invalid input" };
    const err = assertThrows(() => {
      parseInputCode("1 2 -3");
    });
    assertEquals(err.type, expectedErr.type);
  });

  it("should throw error when input contains non-numeric values", () => {
    const expectedErr = { type: "invalid input" };
    const err = assertThrows(() => {
      parseInputCode("a b c d");
    });
    assertEquals(err.type, expectedErr.type);
  });
});

describe("sprintRunner", () => {
  it("should return executed code", () => {
    const input =
      "3 9 1 2 3 4 5 0 3 16 0 5 0 0 1 1 3 4 11 1 5 11 11 1 6 11 11 1 7 11 11 7 11 13 2 13 12 13 1 14 15 14 5 13 12 49 3 35 7 14 8 9";
    const expected = {
      inputCode: [
        3,
        9,
        1,
        2,
        3,
        4,
        5,
        0,
        3,
        16,
        0,
        5,
        0,
        0,
        1,
        1,
        3,
        4,
        11,
        1,
        5,
        11,
        11,
        1,
        6,
        11,
        11,
        1,
        7,
        11,
        11,
        7,
        11,
        13,
        2,
        13,
        12,
        13,
        1,
        14,
        15,
        14,
        5,
        13,
        12,
        49,
        3,
        35,
        7,
        14,
        8,
        9,
      ],
      outputCode: [
        3,
        9,
        1,
        2,
        3,
        4,
        5,
        3,
        3,
        16,
        15,
        5,
        0,
        3,
        1,
        1,
        3,
        4,
        11,
        1,
        5,
        11,
        11,
        1,
        6,
        11,
        11,
        1,
        7,
        11,
        11,
        7,
        11,
        13,
        2,
        13,
        12,
        13,
        1,
        14,
        15,
        14,
        5,
        13,
        12,
        49,
        3,
        35,
        7,
        14,
        8,
        9,
      ],
    };
    assertEquals(sprintRunner(input), expected);
  });
});
