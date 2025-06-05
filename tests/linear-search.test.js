import { linearSearch } from "../scripts/linear-search.js";

const arr = [8, 7, -5, -12, 99, 1, 145, 155658, 8.5, 15, -99.9];

describe("test linearSearch function", () => {
  test("looks for index of element 145 in arr", () => {
    expect(linearSearch(arr, 145)).toBe(6);
  });

  test.each([
    [99, 4],
    [8.5, 8],
    [-99.9, 10],
    [1000, -1],
  ])("looks for index of element %i in arr", (item, expectedIndex) => {
    expect(linearSearch(arr, item)).toBe(expectedIndex);
  });

  test("test first parameter type", () => {
    expect(() => linearSearch(1555, 145)).toThrow(TypeError);
  });
});
