import { binarySearch } from "../scripts/binary-search.js";

const sortedArr = [
  0, 2, 3, 4, 5, 6, 7, 8, 11, 12, 13, 14, 15, 16, 99, 105, 205, 1999,
];

test("looks for index of searched element in sortedArr", () => {
  expect(binarySearch(sortedArr, 13)).toBe(10);
  expect(binarySearch(sortedArr, 1999)).toBe(17);
  expect(binarySearch(sortedArr, -2)).toBe(-1);
  expect(binarySearch([5], 10)).toBe(-1);
  expect(() => binarySearch()).toThrow(TypeError);
});
