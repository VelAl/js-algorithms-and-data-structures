import {
  binarySearch,
  binarySearch_recursy,
} from "../scripts/binary-search.js";

const sortedArr = [
  0, 2, 3, 4, 5, 6, 7, 8, 11, 12, 13, 14, 15, 16, 99, 105, 205, 1999,
];

const searchFunctions = [
  [binarySearch.name, binarySearch],
  [binarySearch_recursy.name, binarySearch_recursy],
];

// Loop through each search function
// // '%s' inserts the function name into the describe block title for clearer test output.
describe.each(searchFunctions)("%s", (_name, searchFn) => {
  test("returns correct index of searched element in sortedArr", () => {
    expect(searchFn(sortedArr, 13)).toBe(10); // Element found
    expect(searchFn(sortedArr, 1999)).toBe(17); // Element found. Last element
    expect(searchFn(sortedArr, -2)).toBe(-1); // Not found
    expect(searchFn([5], 10)).toBe(-1); // Single-element array, not found
  });

  test("throws TypeError when called without arguments", () => {
    expect(() => searchFn()).toThrow(TypeError);
  });
});
