const linearSearch = (arr, item) => {
  if (!Array.isArray(arr)) {
    throw new TypeError("Expected first parameter to be an array.");
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) return i;
  }

  return -1;
};

export { linearSearch };
