function sortedFrequency(arr: number[], num: number): number {
  let left = 0;
  let right = arr.length - 1;
  let numIdx = -1;

  // Find an index of the number
  while (numIdx === -1 && left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] === num) numIdx = middle;
    if (arr[middle] < num) left = middle + 1;
    if (arr[middle] > num) right = middle - 1;
  }

  // Return -1 if number not found
  if (numIdx === -1) return numIdx;

  // Look for boundaries
  let leftBound = Math.ceil((left + numIdx) / 2);
  while (left < numIdx && leftBound > 0) {
    if (arr[leftBound] === num && arr[leftBound - 1] < num) {
      left = leftBound;
      break;
    }
    if (arr[leftBound] === num) leftBound = Math.floor((left + leftBound) / 2);
    if (arr[leftBound] < num) left = leftBound + 1;
  }

  let rightBound = Math.ceil((numIdx + right) / 2);
  while (numIdx < right) {
    if (arr[rightBound] === num && num < arr[rightBound + 1]) {
      right = rightBound;
      break;
    }
    if (arr[rightBound] === num)
      rightBound = Math.floor((rightBound + right) / 2 - 1);
    if (arr[rightBound] > num) right = rightBound - 1;
  }

  // Return distance between boundaries
  return right - left + 1;
}

export default sortedFrequency;
