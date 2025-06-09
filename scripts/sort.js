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

// _________BUBBLE SORT___________________________________
// time complexity: O(n^2)

export const bubbleSort = (arr) => {
  let maxInd = arr.length - 1;

  while (maxInd > 0) {
    for (let i = 0; i < maxInd; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }

    maxInd--;
  }

  return arr;
};

// _________QUICKSORT (Hoare's algorithm)_________________
// time complexity: O(n log n)

export const quickSort = (arr) => {
  if (arr.length <= 1) return arr;

  const midInd = Math.floor(arr.length / 2);
  const min = [];
  const max = [];

  arr.forEach((el, ind) => {
    if (ind !== midInd) {
      el > arr[midInd] ? max.push(el) : min.push(el);
    }
  });

  return [...quickSort(min), arr[midInd], ...quickSort(max)];
};
