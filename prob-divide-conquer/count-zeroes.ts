function countZeroes(arr: number[]): number {
  let left = 0;
  let right = arr.length - 1;

  // Look for boundary; return length of array past boundary if found
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] === 1) {
      if (arr[middle + 1] === 0) return arr.length - middle - 1;
      left = middle + 1;
    }
    if (arr[middle] === 0) {
      if (arr[middle - 1] === 1) return arr.length - middle;
      right = middle - 1;
    }
  }

  // If no boundary found, return 0 or arr.length
  return arr[0] === 0 ? arr.length : 0;
}

export default countZeroes;
