const unsortedArr = [
  755, -7, 19, 3, 8, 23, 55, 12, 60, 34, 77, 16, 91, 4, -68, 10, 5, 36, 0, 2.5,
];

// _________SELECTION SORT_______________________________
// time complexity: O(n^2)

export const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) {
        smallest = j;
      }
    }

    const swap = arr[i];
    arr[i] = arr[smallest];
    arr[smallest] = swap;
  }

  return arr;
};
