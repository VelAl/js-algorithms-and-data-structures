// Simple binary search with time complexity O(log n)

export const binarySearch = (arr, el) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.ceil((start + end) / 2);

    if (arr[mid] === el) return mid;

    el > arr[mid] ? (start = mid + 1) : (end = mid - 1);
  }

  return -1;
};

export const binarySearch_recursion = (
  arr,
  el,
  start = 0,
  end = arr.length - 1
) => {
  if (start > end) return -1;
  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === el) return mid;

  return el < arr[mid]
    ? binarySearch_recursion(arr, el, start, mid - 1)
    : binarySearch_recursion(arr, el, mid + 1, end);
};
