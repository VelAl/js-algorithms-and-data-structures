import { bubleSort, selectionSort } from "../scripts/sort.js";

const unsortedArr = [
  755, -7, 19, 3, 8, 23, 55, 12, 60, 34, 77, 16, 91, 4, -68, 10, 5, 36, 0, 2.5,
];
const sortedArr = [
  -68, -7, 0, 2.5, 3, 4, 5, 8, 10, 12, 16, 19, 23, 34, 36, 55, 60, 77, 91, 755,
];

const sortFunctions = [
  [selectionSort.name, selectionSort],
  [bubleSort.name, bubleSort],
];
const paramsAndResults = [
  [unsortedArr, sortedArr],
  [[], []],
  [[3, 4, 1], [1, 3, 4]],
];

// Loop through each sort function
// '%s' inserts the function name into the describe block title for clearer test output.
describe.each(sortFunctions)("%s function", (_name, sortFn) => {
  test.each(paramsAndResults)("Sort an array in place", (arr, expectedAr) => {
    expect(sortFn([...arr])).toEqual(expectedAr);
  });

  test("%s function throws TypeError when called without arguments", () => {
    expect(() => sortFn()).toThrow(TypeError);
  });
});
