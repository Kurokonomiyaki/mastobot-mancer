export const randomPick = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const mergeArrays = (arr1, arr2) => {
  if (Array.isArray(arr2)) {
    return [
      ...arr1,
      ...arr2,
    ];
  }
  return arr1;
};
